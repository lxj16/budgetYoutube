import React from "react";
import Video from "./Video/Video";

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <Video
        key={video.id.videoId}
        video={video}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
