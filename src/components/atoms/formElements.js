import React, { Component } from 'react';

export const ShortField = (field) => (
  <div className='fieldWrapper'>
    <label>{field.label}</label>
    <input type='text' {...field.input} ></input>
  </div>
)
