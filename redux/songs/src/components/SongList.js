import React from "react";

const SongList = ({ songs, onSelectedSong }) => {
  const listOfSongs = songs.map((song) => {
    return (
      <div class="item">
        <div class="content">
          <div class="header">Title: {song.title}</div>
          Length: {song.length}
        </div>
        <button class="ui button" onClick={() => onSelectedSong(song)}>
          Select
        </button>
      </div>
    );
  });

  return (
    <div class="ui segment">
      <div class="ui relaxed divided list">{listOfSongs}</div>
    </div>
  );
};

export default SongList;
