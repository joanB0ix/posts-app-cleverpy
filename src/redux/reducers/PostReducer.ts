import { FETCH_POSTS_ERROR, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, REMOVE_POST } from '../types/ActionTypes';
import { PostsStateType, PostActionTypes } from '../types/PostTypes';

const initialStateFetchPosts: PostsStateType = {
    pending: true,
    posts: [],
    error: null
};

export const postsReducer = (state: PostsStateType = initialStateFetchPosts, action: PostActionTypes): PostsStateType => {
    switch (action.type) {
        case FETCH_POSTS_PENDING:
            return {
                ...state,
                posts: [],
                pending: true,
                error: null
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                pending: false,
                error: null
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case REMOVE_POST:
            const updatedPosts = state.posts.filter(
                post => post.id !== action.payload.id
            );
            return {
                ...state,
                posts: updatedPosts
            }
        default:
            return state;
    }
}