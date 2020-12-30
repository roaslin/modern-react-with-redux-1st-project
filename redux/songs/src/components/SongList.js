import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  listOfSongs = () => {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            <div className="header">Title: {song.title}</div>
            Length: {song.length}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui relaxed divided list">{this.listOfSongs()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
