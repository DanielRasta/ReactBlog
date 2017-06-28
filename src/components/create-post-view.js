import React from 'react'
import CreatePostForm from './create-post-form'
import {createPost,addPostToView} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class CreatePost extends React.Component {
  submit = (values) => {
    createPost(this.props.developer_id,values.title,values.body, () => {
      addPostToView(values);
    });
  }

  render() {
    if(this.props.developer_id)
    {
      return (
        <CreatePostForm onSubmit={this.submit} />
      )
    }
    return (<div/>)
  }
}

function mapStateToProps({ developer }) {
  if (developer != null)
  {
    return {developer_id: developer.id};
  }
  return {}
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({createPost}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
