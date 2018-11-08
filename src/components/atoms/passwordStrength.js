import React, { Component } from 'react';

const hasNumber = value => { return new RegExp(/[0-9]/).test(value); }
const hasMixed = value => { return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);}
const hasSpecial = value => { return new RegExp(/[!#@$%^&*)(+=._-]/).test(value); }
const strengthIndicator = value => {
   let strengths = 0;
   if (value.length > 1) { strengths++; }
   if (value.length > 7) { strengths++; }
   if (hasNumber(value)) { strengths++; }
   if (hasSpecial(value)) { strengths++; }
   if (hasMixed(value)) { strengths++; }
   return strengths;
}

export default class PasswordStrength extends Component {
  render() {
    const {value} = this.props.input
    const strength = strengthIndicator(value);
    console.log(strength)
    return (
      <div id="passwordStrength">
        <div className={strength > 0 ? 'active strength strength1' : 'strength strength1' } />
        <div className={strength > 1 ? 'active strength strength2' : 'strength strength2' } />
        <div className={strength > 2 ? 'active strength strength3' : 'strength strength3' } />
      </div>
    )
  }
}
