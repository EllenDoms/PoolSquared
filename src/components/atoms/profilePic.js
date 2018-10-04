import React, { Component } from 'react';
import { connect } from "react-redux";

class ProfilePic extends Component {
  render() {
    // if facebook picture is not there
    //clickable??
    const { fbPhotoUrl } = this.props.user.user
    console.log(this.props.user.user)
    return (
      <button className='socialButton' onClick={this.props.click}>
        <span className={`mdi mdi-${this.props.icon}`}></span>
        {this.props.label}
      </button>
    )
    // if facebook picture is there... Show it.
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(ProfilePic);
