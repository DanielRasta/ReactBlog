import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDevProfile,fetchPosts} from '../actions/index';
import {bindActionCreators} from 'redux';

class ApiKeyInput extends Component {


  constructor(props) {
    super(props);
    this.state = {dev_api_key: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }


  onInputChange(event)
  {
    this.state.dev_api_key = event.target.value
  }



  userLogin() {
    this.props.getDevProfile(this.state.dev_api_key).then(
        this.props.fetchPosts(this.props.developer_id));
    }


	render()
	{
		return (
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              onChange={this.onInputChange} />

            <span className="input-group-btn">
              <button
              className="btn btn-default"
              type="button"
              onClick={() => this.userLogin()}>Go!</button>
            </span>
          </div>
	        );
	}

}

function mapStateToProps(state)
{
  var developer_id = -1;
  if (state.developer != null)
  {
    developer_id = state.developer.id;
  }
  return { developer_id: developer_id};
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({getDevProfile,fetchPosts}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(ApiKeyInput);
