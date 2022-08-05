import video from "../data/video.js";
import VideoSection from "./VideoSection";
import CommentSection from "./CommentSection";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoSection videoData={video}/>
      <CommentSection comments={video.comments}/>
    </div>
  );
}

export default App;
