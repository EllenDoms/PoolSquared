import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAa7J-fkleHt_3RvhhjZJqy14GC9CG_cvs",
  authDomain: "pool-squared.firebaseapp.com",
  databaseURL: "https://pool-squared.firebaseio.com",
  projectId: "pool-squared",
  storageBucket: "pool-squared.appspot.com",
  messagingSenderId: "237933851037"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
