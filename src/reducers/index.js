import { combineReducers } from 'redux';
import DevReducer from './dev_profile_reducer'
import PostsReducer from './posts_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  developer: DevReducer,
  form: formReducer,
  posts: PostsReducer
});

export default rootReducer;
