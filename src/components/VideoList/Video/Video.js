import React from "react";
import "./Video.css";

const Video = ({ video, onSelectedVideo }) => {
  return (
    <div className="video-tab item" onClick={() => onSelectedVideo(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
