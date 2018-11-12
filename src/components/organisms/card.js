import React, { Component } from 'react';
import ProfilePic from '../atoms/profilePic';

export default class Card extends Component {
  render() {
    return (
      <div className='wrap'>
        <div className='card'>

        </div>
        <button className={`floating mdi mdi-star-outline`}></button>
      </div>
    )
  }
}
