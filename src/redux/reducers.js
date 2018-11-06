import { combineReducers } from 'redux';
import reducerUser from './reducerUser';
import { reducer as FormReducer} from 'redux-form'; //assign to alias FormReducer

const rootReducer = combineReducers({
  user: reducerUser,
  form: FormReducer
})

export default rootReducer;
