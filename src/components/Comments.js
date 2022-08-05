import React from "react";

function Comments({ user, comment }) {

    return (
        <div>
            <h4>{user}</h4>
            <h6>{comment}</h6>
        </div>
    );
  }

export default Comments;
