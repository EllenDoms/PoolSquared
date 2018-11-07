import React, { Component } from 'react';
import { connect } from "react-redux";
import { overlayScreen } from '../../redux/actions';

class ProfilePic extends Component {
  render() {
    const { user, user : { fbPhotoUrl, loggedIn }} = this.props
    if(!user || !loggedIn) { // user not logged in = open login screen
      return <div className='mdi mdi-account-outline' onClick={this.props.clickable ? () => this.props.overlayScreen('login', true) : ''}></div>
    } else if(loggedIn && !fbPhotoUrl  ) { // There is a user, but no picture = open profile
      return <div className='mdi mdi-account' onClick={this.props.clickable ? () => this.props.overlayScreen('profile', true) : ''}></div>
    } else { // user and picture
      return <img className='avatarMini' src={fbPhotoUrl} onClick={this.props.clickable ? () => this.props.overlayScreen('profile', true) : ''}/>
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    screen: state.user.screenOverlay
  };
}

export default connect(mapStateToProps, { overlayScreen })(ProfilePic);
