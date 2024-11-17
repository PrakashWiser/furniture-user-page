import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, isPlaying }) => {
  const handleEnd = () => {
    alert("Video has finished!");
  };

  return (
    <div className="video-player">
      <ReactPlayer
        url={url}
        controls={true}
        playing={isPlaying} 
        onEnded={handleEnd}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default VideoPlayer;
