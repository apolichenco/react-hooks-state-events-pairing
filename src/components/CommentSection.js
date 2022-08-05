import React, {useState} from "react";
import Comments from "./Comments";

function CommentSection({ comments }) {
    const [toggleComments, setToggleComments] = useState(true)
    function handleCommentToggling() {
        setToggleComments(!toggleComments)
    }

    const commentsShown = 
    <div>
        <button onClick={handleCommentToggling}>
            <h6>Hide Comments</h6>
        </button> 
        <h2>{comments.length} Comments</h2>
        {comments.map((comment) => <Comments key={comment.id} user={comment.user} comment={comment.comment}/>)}
    </div>

    const commentsHidden = 
    <div>
        <button onClick={handleCommentToggling}>
            <h6>Show Comments</h6>
        </button> 
    </div>
    


    return (
        <div>
            {toggleComments ? commentsShown : commentsHidden} 
        </div>
    );
  }

export default CommentSection;
