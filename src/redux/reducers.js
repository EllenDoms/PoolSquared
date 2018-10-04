import { combineReducers } from 'redux';
import reducerUser from './reducerUser';

const rootReducer = combineReducers({
  user: reducerUser,
})

export default rootReducer;
