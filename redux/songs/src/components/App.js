import React, { useState } from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";
import { selectSong } from "../actions";

const songs = [
  {
    title: "SOng title 1",
    length: "1:57",
  },
  {
    title: "SOng title 2",
    length: "2:12",
  },
  {
    title: "SOng title 3",
    length: "3:21",
  },
];

const App = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  return (
    <>
      <SongList songs={songs} onSelectedSong={setSelectedSong} />
      <SongDetail song={selectedSong} />
    </>
  );
};

export default App;
