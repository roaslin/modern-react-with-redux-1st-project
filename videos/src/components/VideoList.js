import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onClickVideoItem }) => {
  const list = videos.map((video) => {
    return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onClickVideoItem={onClickVideoItem}
        />
    );
  });
  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
