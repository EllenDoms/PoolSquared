import React, { Component } from 'react';
import './components/assets/default.css'; //css default
import './components/assets/poolSquared.css'; //special project css

import Radar from './screens/radar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Radar />
      </div>
    );
  }
}

export default App;
