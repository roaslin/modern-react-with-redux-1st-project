import React from "react";

const SongDetail = ({ song }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="meta">
          <span className="date">{song.title}</span>
        </div>
        <div className="description">{song.length}</div>
      </div>
    </div>
  );
};

export default SongDetail;
