import { LOGIN_USER } from "./types";

const initialState = {
  loggedIn: false
};

export default function reducerState (state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER :
      return { ...state, user: action.user, loggedIn: action.loggedIn}
    default:
      return state;
  }
}
