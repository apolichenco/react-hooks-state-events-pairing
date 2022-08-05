import React, {useState} from "react";
import Button from "./Button"

function VideoSection({ videoData }) {
    const [theUpvote, setUpvote] = useState(videoData.upvotes);
    const [theDownvote, setDownvote] = useState(videoData.downvotes);

    function handleUpvote() {
        setUpvote(theUpvote + 1);
      }

    function handleDownvote() {
        setDownvote(theDownvote + 1);
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={videoData.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h2>{videoData.title}</h2>
            <h5>{videoData.views} Views / Uploaded {videoData.createdAt}</h5>
            <Button text={theUpvote} emoji={"👍"} clickFunction={handleUpvote} />
            <Button text={theDownvote} emoji={"👎"} clickFunction={handleDownvote} />
        </div>
    );
  }

export default VideoSection;
