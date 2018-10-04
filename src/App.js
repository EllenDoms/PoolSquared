import React, { Component } from 'react';
import { connect } from "react-redux";
import { login } from './redux/actions';
import * as firebase from 'firebase';
import { auth } from './config/firebase';

import './components/assets/default.css'; //css default
import './components/assets/poolSquared.css'; //special project css

import Radar from './screens/radar';

class App extends Component {
  componentDidMount() {
  // listener authentication
  auth().onAuthStateChanged(user => {
    if(user) { this.props.login(user) }
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

export default connect(mapStateToProps, { login })(App);
