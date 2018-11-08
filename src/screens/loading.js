import React, { Component } from 'react';

import Logo from '../components/assets/logo.png';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img alt="radarbg" className='imgMedium center' src={Logo}></img>
        <p>Loading...</p>
      </div>
    )
  }
}
