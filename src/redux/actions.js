import { UPDATE_USER } from './types.js';
import * as firebase from "firebase";

export const login = (user) => (dispatch, getState) => {
  console.log('We are logging in')
  firebase.database().ref('/people/' + user.uid).once('value')
  .then(snapshot => snapshot.val()).then(val => {
    console.log(val)
    if(val) {
      console.log('Exists: ', val)
      dispatch({
        type: UPDATE_USER,
        user: val,
      });
    } else {
      console.log('Does not exist yet')
      let params = {
        loggedIn: true,
        uid: user.uid,
        fbPhotoUrl: user.photoURL,
        name: user.displayName
      }
      firebase.database().ref('/people/' + user.uid).update(params);
      dispatch({
        type: UPDATE_USER,
        user: params,
      });
    }
  })

  // firebase.database().ref('/' + game + '/people/' + user.uid).on('value', (snapshot) => {
  //   dispatch({ type: UPDATE_USER, payload: snapshot.val() })
  // });

};
