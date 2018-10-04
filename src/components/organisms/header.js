import React, { Component } from 'react';
import ProfilePic from '../atoms/profilePic';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className={this.props.iconLeft ? `left mdi mdi-${this.props.iconLeft}` : 'left' } onClick={this.props.clickLeft}></div>
        <h2 className='middle'>{this.props.title}</h2>
        <ProfilePic clickable='true' />
        {/* <div className={this.props.iconRight ? `right mdi mdi-${this.props.iconRight}` : 'right' } onClick={this.props.clickRight}></div> */}
      </div>
    )
  }
}
