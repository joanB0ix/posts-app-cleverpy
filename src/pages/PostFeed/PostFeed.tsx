import * as React from 'react';

//Styling
import './PostFeed.scss';

//Children components
import GoBackToTopButton from '../../components/GoBackToTopButton/GoBackToTopButton';
import Loading from '../../components/Loading/Loading';
import Feed from './components/Feed/Feed';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../redux/interfaces/Post';
import { AppState } from '../../redux/store';
import { AppDispatch } from '../../redux/types/PostTypes';

//API
import { deletePost } from '../../api/deletePost';
import { getPosts } from '../../api/getPosts';

const PostFeed = () => {

    const [isButtonShown, setIsButtonShown] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const state = useSelector((state: AppState) => state.posts);
    const dispatch:AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    //Fixed flickering when page loaded
    React.useEffect(() => {
        setIsLoading(state.pending);
    }, [state])

    window.onscroll = function () {
        setIsButtonShown(window.pageYOffset > 250);
    }

    const deletePostAction = (post:Post) => 
    {
        dispatch(deletePost(post));
    }

    return (
        <div className="postfeed-wrapper">
            {
                isLoading && <Loading/>
            }
            {
                !isLoading && (state.error === null ? <Feed posts={state.posts} deleteAction={deletePostAction}/> : <div className="postfeed-error">There has been an error.</div>)
            }
            {
                isButtonShown && <GoBackToTopButton />
            }
        </div>
    )
}

export default PostFeed;