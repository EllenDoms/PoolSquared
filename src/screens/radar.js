import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import Header from '../components/organisms/header';

//screens
import Login from './login';

class Radar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginOverlay: false,
      profileOverlay: false,
    }

  }
  render() {
    return (
      <div>
        <div className='overlayScreen' style={{display: this.state.loginOverlay === true ? 'block' : 'none'}}>
          <Login close={() => this.setState({loginOverlay: false})}/>
        </div>
        <Header title='Find a pool' iconRight='account-outline' clickRight={() => this.setState({loginOverlay: true})} />
        Map
        Cards

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.data.loggedIn
  };
}

export default connect(mapStateToProps)(Radar);
