import React, { Component } from 'react';

export default class socialButton extends Component {
  render() {
    return (
      <button className='socialButton' onClick={this.props.click}>
        <span className={`mdi mdi-${this.props.icon}`}></span>
        {this.props.label}
      </button>
    )
  }
}
