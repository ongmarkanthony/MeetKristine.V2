
import { combineReducers, createStore } from 'redux';
import loggedInUserReducer from './loggedinUserReducer';

const rootReducer = combineReducers({
  loggedInUser: loggedInUserReducer,
});

const store = createStore(rootReducer);

export default rootReducer;
