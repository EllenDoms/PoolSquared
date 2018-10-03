import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../components/atoms/buttons/socialButton';
import RadarBg from '../components/assets/radarBg.png';
import Logo from '../components/assets/logo.png';

class Login extends Component {
  render() {
    return (
      <div className='overlay'>
        <div className='container center'>
          <img className='radarBg' src={RadarBg}></img>
          <img className='imgMedium center' src={Logo}></img>
          <p>Login to make a reservation</p>
          <Button label='Continue with facebook' icon='facebook' disabled='false' />
          <p className="textLight">We don't post anything on facebook</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.data.loggedIn
  };
}

export default connect(mapStateToProps)(Login);
