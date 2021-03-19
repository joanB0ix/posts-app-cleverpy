import { ThunkDispatch } from "redux-thunk";
import { Post } from "../interfaces/Post";
import { AppState } from "../store";
import { FETCH_POSTS_ERROR, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, REMOVE_POST } from "./ActionTypes";

export interface PostsStateType {
    pending: boolean;
    posts: Post[];
    error: string | null;
}

interface FetchPostsSuccessActionType {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: Post[];
    error?: string;
}

interface FetchPostsErrorActionType {
    type: typeof FETCH_POSTS_ERROR;
    error: string;
}

interface FetchPostsPendingActionType {
    type: typeof FETCH_POSTS_PENDING
}

interface RemovePostActionType {
    type: typeof REMOVE_POST,
    payload: Post
}

export type AppDispatch = ThunkDispatch<AppState, any, PostActionTypes>;

export type PostActionTypes = FetchPostsSuccessActionType | FetchPostsErrorActionType | FetchPostsPendingActionType | RemovePostActionType;
