import { PostActionTypes } from '../types/PostTypes';
import { Post } from '../interfaces/Post';
import { FETCH_POSTS_ERROR, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, REMOVE_POST } from '../types/ActionTypes';

export const fetchPostsPendingAction = (): PostActionTypes => {
    return {
        type: FETCH_POSTS_PENDING,
    }
}

export const fetchPostsSuccessAction = (posts: Post[]): PostActionTypes => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsErrorAction = (error: string): PostActionTypes => {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}

export const removePostAction = (post: Post): PostActionTypes => {
    return {
        type: REMOVE_POST,
        payload: post
    }
}