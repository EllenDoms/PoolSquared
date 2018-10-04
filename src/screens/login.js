import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../components/atoms/button';
import RadarBg from '../components/assets/radarBg.png';
import Logo from '../components/assets/logo.png';

class Login extends Component {
  render() {
    return (
      <div className='overlay' onClick={this.props.close}>
        <div className='card center'>
          <img className='radarBg' src={RadarBg}></img>
          <div className='wrapper'>
            <img className='imgMedium center' src={Logo}></img>
            <p>Login to make a reservation</p>
            <Button label='Continue with facebook' icon='facebook' disabled='false' />
            <p className="textLight">We don't post anything on facebook</p>
          </div>
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
