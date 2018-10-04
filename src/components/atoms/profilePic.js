import React, { Component } from 'react';
import { connect } from "react-redux";
import { overlayScreen } from '../../redux/actions';

class ProfilePic extends Component {
  render() {
    console.log(this.props)
    // if facebook picture is not there
    //clickable??
    const { fbPhotoUrl } = this.props.user
    if(!this.props.user) { // user not logged in = open login screen
      return <div className='mdi mdi-account-outline' onClick={this.props.clickable ? () => this.props.overlayScreen('login', true) : ''}></div>
    } else if(!fbPhotoUrl) { // There is a user, but no picture = open profile
      return <div className='mdi mdi-account-outline' onClick={this.props.clickable ? () => this.props.overlayScreen('login', true) : ''}></div>
    } else {
      return <img className='avatarMini' src={fbPhotoUrl} onClick={this.props.clickable ? () => this.props.overlayScreen('profile', true) : ''}/>
    }

    // if facebook picture is there... Show it.
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    screen: state.user.screenOverlay
  };
}

export default connect(mapStateToProps, { overlayScreen })(ProfilePic);
