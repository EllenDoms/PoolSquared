import React, { Component } from 'react';
import './components/assets/default.css'; //css default
import './components/assets/poolSquared.css'; //special project css

import Login from './screens/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
