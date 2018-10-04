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
    console.log(this.state.loginOverlay)
    return (
      <div>
        <div className={this.state.loginOverlay === true ? 'overlayScreen active' : 'overlayScreen'}>
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
