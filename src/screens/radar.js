import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';

//components
import Header from '../components/organisms/header';
import Card from '../components/organisms/card';

//screens
import Login from './login';
import Profile from './profile';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class Radar extends Component {
  render() {
    const { screen } = this.props
    return (
      <div>
        <Login state={screen.login === true ? 'overlayScreen active' : 'overlayScreen'} />
        <Profile state={screen.profile === true ? 'overlayScreen active' : 'overlayScreen'} />
        <Header title='Find a pool' iconLeft='plus' />
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
           lat: 51.0538286,
           lng: 3.7250121
          }}
        />
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

const connectRadarToRedux = connect(mapStateToProps)(Radar);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDtaX-G4WYasmq1VxnI6RH9Nvv3EjyETxw'
})(connectRadarToRedux);
