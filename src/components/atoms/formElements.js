import React, { Component } from 'react';

export const ShortField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='fieldWrapper'>
    <label>{label}</label>
    <input type={type} {...input} ></input>
    <div className="error">{touched && error ? error : ''}</div>
  </div>
)
