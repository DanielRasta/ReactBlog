import React, {Component} from 'react';
import {connect} from 'react-redux';

class BlogPost extends Component {
  render(){
          return(
            <div className="row">
              <div className="col-sm-2">
                <div className="thumbnail">
                  <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                </div>
              </div>

              <div className="col-sm-10">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>{this.props.title}</strong> <span className="text-muted">commented 5 days ago</span>
                  </div>

                  <div className="panel-body">
                    {this.props.body}
                  </div>
                </div>
              </div>
            </div>
          );
        }
}

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps)(BlogPost);
