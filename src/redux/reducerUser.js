import { UPDATE_USER } from "./types";

const initialState = {
  user: {
    loggedIn: false,
    uid: '',
    fbPhotoUrl: '',
    name: ''
  }
};

export default function reducerState (state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER :
      return { user: action.user }
    default:
      return state;
  }
}
