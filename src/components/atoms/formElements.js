import React, { Component } from 'react';

export const ShortField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='fieldWrapper'>
    <label>{label}</label>
    {touched && error && <span className="error">{error}</span>}
    <input type={type} {...input} ></input>
  </div>
)
