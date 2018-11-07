import React, { Component } from 'react';
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { provider, auth } from '../config/firebase';
import { Field, reduxForm, FieldArray } from 'redux-form';

import { logout, overlayScreen } from '../redux/actions';

import Button from '../components/atoms/button';
import { ShortField } from '../components/atoms/formElements';
import Tabs from '../components/organisms/tabs';


class Profile extends Component {
  render() {
    const { auth, error, handleSubmit } = this.props;
    return (
      <div className={this.props.state} >
        <div className='overlay' onClick={() => this.props.overlayScreen('profile', false)}/>
        <div className='card center'>
          <p>-profile wip-</p>
          <Button label='Logout' disabled='false' click={() => this.props.logout()} />
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

export default connect(mapStateToProps, { logout, overlayScreen })(Profile);
