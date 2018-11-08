import React, { Component } from 'react';

import PasswordStrength from "./passwordStrength";

export const ShortField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='fieldWrapper'>
    <label htmlFor={label}>{label}</label>
    <input id={label} type={type} {...input} ></input>
    <div className="error">{touched && error ? error : ''}</div>
  </div>
)

export const PasswordRegister = ({ input, label, type, meta: { touched, error } }) => (
  <div className='fieldWrapper'>
    <label htmlFor={label}>{label}</label>
    <input id={label} type={type} {...input} ></input>
    <div className="error">{touched && error ? error : ''}</div>
    <PasswordStrength input={input} />
  </div>
)
