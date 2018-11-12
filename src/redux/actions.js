import { UPDATE_USER, SCREEN_OVERLAY } from './types.js';
import * as firebase from "firebase";
import { provider, auth } from '../config/firebase';

export const overlayScreen = (screen, state) => (dispatch, getState) => {
  dispatch({ type: SCREEN_OVERLAY, screen: screen, state: state });
}

export const fbLogin = (user) => (dispatch) => {
  firebase.database().ref('/people/' + user.uid).once('value')
  .then(snapshot => snapshot.val()).then(val => {
    if(val) {
      dispatch({ type: UPDATE_USER, payload: val });
    } else {
      let params = {
        loggedIn: true,
        uid: user.uid,
        fbPhotoUrl: user.photoURL,
        name: user.displayName
      }
      firebase.database().ref('/people/' + user.uid).update(params);
      dispatch({ type: UPDATE_USER, payload: params });
    }
    // now we can close the login screen
    dispatch({ type: SCREEN_OVERLAY, screen: 'login', state: false });
  })
};

export const login = (user) => (dispatch) => {
  firebase.database().ref('/people/' + user.uid).once('value')
  .then(snapshot => snapshot.val()).then(val => {
    if(val) {
      // user exists
      dispatch({ type: UPDATE_USER, payload: val });
    } else {
      // new user
      let params = {
        loggedIn: true,
        uid: user.uid,
        email: user.email
      }
      firebase.database().ref('/people/' + user.uid).update(params);
      dispatch({ type: UPDATE_USER, payload: params });

      // send register mail
    }
    // now we can close the login screen
    dispatch({ type: SCREEN_OVERLAY, screen: 'login', state: false });
  })
};

export const logout = () => (dispatch, getState) => {
  console.log(getState())
  let uid = getState().user.user.uid
  auth().signOut().then(function() {
    dispatch({ type: UPDATE_USER, payload: {loggedIn: false} });
    // now we can close the profile screen
    dispatch({ type: SCREEN_OVERLAY, screen: 'profile', state: false });
  }).catch(function(error) { console.log(error) });

};
