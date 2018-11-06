import { UPDATE_USER, SCREEN_OVERLAY } from './types.js';
import * as firebase from "firebase";

export const fbLogin = (user) => (dispatch, getState) => {
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

export const overlayScreen = (screen, state) => (dispatch, getState) => {
  dispatch({ type: SCREEN_OVERLAY, screen: screen, state: state });
}
