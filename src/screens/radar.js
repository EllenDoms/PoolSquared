import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import Header from '../components/organisms/header';

//screens
import Login from './login';

class Radar extends Component {
  render() {
    const { screen } = this.props
    return (
      <div>
        <Login
          state={screen.login === true ? 'overlayScreen active' : 'overlayScreen'}
          close={() => this.setState({loginOverlay: false})}
        />
        <Header title='Find a pool' />
        Map
        <Card
          title='Mah Pool!'
          active='true'
          img='link...'
          stars='3.4'
          price='10'
          people='4'
          btn=''

          // Props: title, active, img, stars, money, people, favorite/rate/edit

        />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    screen: state.user.screenOverlay
  };
}

export default connect(mapStateToProps)(Radar);
