import * as React from 'react';

//Styling
import './PostCard.scss';

//Children components
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

//Redux
import { Post } from '../../../../redux/interfaces/Post';

type Props = {
    post: Post,
    deleteAction: React.MouseEventHandler<HTMLButtonElement>;
}

const PostCard = (props: Props) => {
    return (
        <div className="post-wrapper">
            <div className="post-title">
                {props.post.title}
            </div>
            <div className="post-body">
                {props.post.body}
            </div>
            <div className="post-user">
                <div>
                    User {props.post.userId}
                </div>
                <button className="post-delete" onClick={props.deleteAction}>
                    <DeleteOutlineIcon />
                </button>
            </div>
        </div>
    )
}

export default PostCard;