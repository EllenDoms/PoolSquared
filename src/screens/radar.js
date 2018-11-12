import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import Map from '../components/molecules/map';
import Header from '../components/organisms/header';
import Card from '../components/organisms/card';

//screens
import Login from './login';
import Profile from './profile';

class Radar extends Component {
  render() {
    const { screen } = this.props
    return (
      <div>
        <Login state={screen.login === true ? 'overlayScreen active' : 'overlayScreen'} />
        <Profile state={screen.profile === true ? 'overlayScreen active' : 'overlayScreen'} />
        <Header title='Find a pool' iconLeft='plus' />
        <Map />
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
