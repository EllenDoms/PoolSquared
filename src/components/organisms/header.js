import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className={this.props.iconLeft ? `left mdi mdi-${this.props.iconLeft}` : 'left' } onClick={this.props.clickLeft}></div>
        <h2 className='middle'>{this.props.title}</h2>
        <div className={this.props.iconRight ? `right mdi mdi-${this.props.iconRight}` : 'right' } onClick={this.props.clickRight}></div>
      </div>
    )
  }
}
