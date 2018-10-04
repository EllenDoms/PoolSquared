import React, { Component } from 'react';
import { connect } from "react-redux";
import { login, overlayScreen } from '../redux/actions';
import * as firebase from 'firebase';
import { provider, auth } from '../config/firebase';

import Button from '../components/atoms/button';
import RadarBg from '../components/assets/radarBg.png';
import Logo from '../components/assets/logo.png';

class Login extends Component {
  login() {
    auth().signInWithPopup(provider).then(result => {
      this.props.login(result.user);
    }).catch(function(error) { console.log(error) });
  }
  render() {
    return (
      <div className={this.props.state} >
        <div className='overlay' onClick={() => this.props.overlayScreen('login', false)}/>
        <div className='card center'>
          <img className='radarBg' src={RadarBg}></img>
          <div className='wrapper'>
            <img className='logoMedium center' src={Logo}></img>
            <p>Login to make a reservation</p>
            <Button label='Continue with facebook' icon='facebook' disabled='false' click={() => this.login()} />
            <p className="textLight">We don't post anything on facebook</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    screen: state.user.screenOverlay
  };
}

export default connect(mapStateToProps, { login, overlayScreen })(Login);
