import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  const [play, setPlay] = useState(false);
  const handleEnd = () => {
    alert("Video has finished!");
  };
  const HandlePlay = () => {
    setPlay(true);
    
  };
  return (
    <div className="video-player" onClick={HandlePlay}>
      <ReactPlayer
        url={url}
        controls={true}
        onEnded={handleEnd}
        playing={play}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default VideoPlayer;
