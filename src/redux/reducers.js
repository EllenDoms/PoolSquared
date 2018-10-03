import { combineReducers } from 'redux';
import reducerState from './reducerState';

const rootReducer = combineReducers({
  data: reducerState,
})

export default rootReducer;
