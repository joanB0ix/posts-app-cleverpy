import * as React from 'react';

//Styling
import './Feed.scss';

//Redux
import { Post } from '../../../../redux/interfaces/Post';

//Child components
import PostCard from '../PostCard/PostCard';

type Props =
    {
        posts: Post[],
        deleteAction: (post:Post) => void;
    }

const Feed = (props: Props) => {
    return (
        <div className="feed-wrapper">
            {props.posts.map((post: Post) => (
                <PostCard
                    post={post}
                    deleteAction={() => props.deleteAction(post)}
                    key={post.id}
                />
            ))}
        </div>
    )
}

export default Feed;