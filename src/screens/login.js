import React, { Component } from 'react';
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { provider, auth } from '../config/firebase';
import { Field, reduxForm, FieldArray } from 'redux-form';

import { login, overlayScreen } from '../redux/actions';

import Button from '../components/atoms/button';
import { ShortField } from '../components/atoms/formElements';
import RadarBg from '../components/assets/radarBg.png';
import Logo from '../components/assets/logo.png';

class Login extends Component {
  formSubmit = (values) => {
    auth().createUserWithEmailAndPassword(values.email, values.password).then(result => {
      console.log(result)
      this.props.login(result.user);
    }).catch(function(error) { console.log(error) });
  }
  render() {
    const { auth, error, handleSubmit } = this.props;
    return (
      <div className={this.props.state} >
        <div className='overlay' onClick={() => this.props.overlayScreen('login', false)}/>
        <div className='card center'>
          <img className='radarBg' src={RadarBg}></img>
          <div className='wrapper'>
            <img className='logoMedium center' src={Logo}></img>
            <p>Login to make a reservation</p>
            {/*Login email */}
            <form onSubmit={handleSubmit(this.formSubmit)}>
              <Field name='email' label='Email' component={ShortField} type='text' />
              <Field name='password' label='Password' component={ShortField} type='password' />
              <Button label='Login' disabled='false' type='submit' />
            </form>
            {/* Login FB */}
            {/*<Button label='Continue with facebook' icon='facebook' disabled='false' click={() => this.login()} />*/}
            <p className="textLight">We don't post anything on facebook</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    screen: state.user.screenOverlay
  };
}

export default reduxForm({
  // validate,
  form: 'signInForm',
})( connect(mapStateToProps, { login, overlayScreen })(Login));
