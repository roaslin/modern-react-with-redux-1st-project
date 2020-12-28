import React from "react";

const SongDetail = ({ song }) => {
  return (
    <div class="ui card">
      <div class="content">
        <div class="meta">
          <span class="date">{song.title}</span>
        </div>
        <div class="description">{song.length}</div>
      </div>
    </div>
  );
};

export default SongDetail;
