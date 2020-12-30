import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="meta">
          <span className="date">{song.title}</span>
        </div>
        <div className="description">{song.duration}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
