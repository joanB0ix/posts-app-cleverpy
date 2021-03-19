import { removePostAction } from '../redux/actions/PostActions';
import { Dispatch } from 'redux';
import { PostActionTypes } from '../redux/types/PostTypes';
import { Post } from '../redux/interfaces/Post';

export const deletePost = (post: Post) => {
    return function (dispatch : Dispatch<PostActionTypes>) {
        dispatch(removePostAction(post));
    }
}