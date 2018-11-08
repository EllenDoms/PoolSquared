import React, { Component } from 'react';
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { provider, auth } from '../config/firebase';
import { Field, reduxForm, FieldArray } from 'redux-form';

import { login, overlayScreen } from '../redux/actions';

import RadarBg from '../components/assets/radarBg.png';
import Logo from '../components/assets/logo.png';
import Button from '../components/atoms/button';
import { ShortField, PasswordRegister } from '../components/atoms/formElements';
import Tabs from '../components/organisms/tabs';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'login' };
  }
  setActive = (activePage) => {
    this.setState({active: activePage})
  }
  formSubmit = (values) => {
    if(this.state.active === 'login') {
      auth().signInWithEmailAndPassword(values.email, values.password).then(result => {
        this.props.login(result.user);
      }).catch(function(error) { alert(error) });
    } else {
      auth().createUserWithEmailAndPassword(values.email, values.password).then(result => {
        this.props.login(result.user);
      }).catch(function(error) { alert(error) });
    }
  }
  render() {
    const { auth, error, handleSubmit } = this.props;
    return (
      <div className={this.props.state} >
        <div className='overlay' onClick={() => this.props.overlayScreen('login', false)}/>
        <div className='card center'>
          <img alt="radarBg" className='radarBg' src={RadarBg}></img>
          <div className='wrapper'>
            <img alt="logo" className='logoMedium center' src={Logo}></img>
            <Tabs items={['login', 'register']} active={this.state.active} action={this.setActive} />
            {/*Login email */}
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <Field name='email' label='Email' component={ShortField} type='text' />
              <Field name='password' label='Password' component={PasswordRegister} type='password' />
              <Button label={this.state.active === 'login' ? 'Login' : 'Register'} disabled='false' type='submit' />
            </form>
            {/* Login FB */}
            {/*<Button label='Continue with facebook' icon='facebook' disabled='false' click={() => this.login()} />
            <p className="textLight">We don't post anything on facebook</p>*/}
          </div>
        </div>
      </div>
    )
  }
}

const validate = values => { //validate function will automatically be called by redux-form
  const errors = {};
  if(!values.email) { errors.email = 'Required' }
  if(!values.password) { errors.password = 'Required' }
  return errors
}

function mapStateToProps(state) {
  return {
    user: state.user,
    screen: state.user.screenOverlay
  };
}

export default reduxForm({
  validate,
  form: 'signInForm',
})( connect(mapStateToProps, { login, overlayScreen })(Login));
