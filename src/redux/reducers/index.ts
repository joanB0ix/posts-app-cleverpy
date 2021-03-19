import { combineReducers } from 'redux';
import { postsReducer } from './PostReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;