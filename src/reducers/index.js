import { combineReducers } from 'redux';
import posts from './posts';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  posts,
  form: formReducer
});

export default rootReducer;