import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "SOng title 1",
      duration: "1:57",
    },
    {
      title: "SOng title 2",
      duration: "2:12",
    },
    {
      title: "SOng title 3",
      duration: "3:21",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
