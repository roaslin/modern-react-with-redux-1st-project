import React from "react";

const VideoItem = ({ video, onClickVideoItem }) => {
  const onClickItem = (video) => {
    onClickVideoItem(video);
  };

  return (
    <div className="item" onClick={()=> onClickItem(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <a className="header">{video.snippet.title}</a>
      </div>
    </div>
  );
};

export default VideoItem;
