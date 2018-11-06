import { UPDATE_USER, SCREEN_OVERLAY } from "./types";

const initialState = {
  user: {
    loggedIn: false,
    uid: ''
  },
  screenOverlay: {
    login: false,
    profile: false,
    detail: false,
    confirmation: false
  }
};

export default function reducerState (state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER :
      return { ...state, user: action.payload }
    case SCREEN_OVERLAY :
      return { ...state, screenOverlay: { ...state.screenOverlay, [action.screen] : action.state} }
    default:
      return state;
  }
}
