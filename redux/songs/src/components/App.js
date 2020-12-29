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
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList songs={songs} onSelectedSong={setSelectedSong} />
        </div>
        <div className="column six wide">
          <SongDetail song={selectedSong} />
        </div>
      </div>
    </div>
  );
};

export default App;
