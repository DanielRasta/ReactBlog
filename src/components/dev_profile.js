import React, {Component} from 'react';
import {connect} from 'react-redux';

class DevProfile extends Component {

  render(){
            if (!this.props.developer) {
              return (
              <div className="row">
                <h4 className="media-heading">Hello Guest!</h4>
              </div>);
            }

            return (
              <div className="row">
                <h4 className="media-heading">Hello {this.props.developer.name}!</h4>
              </div>
          );
        }
}



function mapStateToProps({ developer }) {
  return { developer };
}

export default connect(mapStateToProps)(DevProfile);
