//Redux
import { fetchPostsErrorAction, fetchPostsPendingAction, fetchPostsSuccessAction } from '../redux/actions/PostActions';
import { Dispatch } from 'redux';
import { PostActionTypes } from '../redux/types/PostTypes';

export const getPosts = () => {
    return function (dispatch: Dispatch<PostActionTypes>) {
        dispatch(fetchPostsPendingAction());
        
        //Timeout to emulate data loading
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(fetchPostsSuccessAction(data));
                    return data;
                })
                .catch(error => {
                    dispatch(fetchPostsErrorAction(error));
                }); 
        }, 500);
    }
}