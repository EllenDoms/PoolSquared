import React, { Component } from 'react';
import { connect } from "react-redux";
import { fbLogin } from './redux/actions';
import * as firebase from 'firebase';
import { auth } from './config/firebase';

import './style/default.css'; //css default
import './style/poolSquared.css'; //special project css

import Radar from './screens/radar';

class App extends Component {
  componentDidMount() {
    // listener authentication
    auth().onAuthStateChanged(user => {
      if(user) { this.props.fbLogin(user) }
    });
  }
  render() {
    return (
      <div className="App">
        <Radar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

export default connect(mapStateToProps, { fbLogin })(App);
