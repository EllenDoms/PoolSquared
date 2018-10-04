import React, { Component } from 'react';

export default class ProfilePic extends Component {
  render() {
    // if facebook picture is not there
    return (
      <button className='socialButton' onClick={this.props.click}>
        <span className={`mdi mdi-${this.props.icon}`}></span>
        {this.props.label}
      </button>
    )
    // if facebook picture is there... Show it.
  }
}
