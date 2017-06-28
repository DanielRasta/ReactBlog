import _ from "lodash";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlogPost from './blog-post'
import {fetchPosts} from '../actions/index';


class BlogContent extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.developer_id);
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div className="row" key={post.id}>
          <BlogPost title={post.title} body={post.body} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
          {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  var developer_id = -1;
  if (state.developer != null)
  {
    developer_id = state.developer.id;
  }
  return { posts: state.posts , developer_id: developer_id};
}

export default connect(mapStateToProps, { fetchPosts })(BlogContent);
