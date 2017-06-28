import React, { Component } from 'react';

import ApiKeyInput from '../containers/apikey_input'
import DevProfile from './dev_profile'
import CreatePost from './create-post-view'
import BlogContent from './blog-content'



export default class App extends Component {

  render() {
    return (

      <div className="container-fluid text-center">
        <div className="row content">

          <div className="col-sm-1">
            <p></p>
          </div>

          <div className="col-sm-9 text-left">

            <br/>

            <div className="row">
              <div className="col-lg-6">
                  <ApiKeyInput />
              </div>
              <div className="col-lg-6">
                <DevProfile />
              </div>
            </div>
            <div className="row">
              <CreatePost />
            </div>
            <br/>

            <BlogContent />
          </div>

        </div>
      </div>


    );
  }
}
