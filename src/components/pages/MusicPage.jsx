import React, { useState } from "react";
import MusicItem from "../Music/MusicItem";
import "../../css/musicpage.css";

const MusicPage = () => {
  const [list, setList] = useState([
    {
      artist: "Artist 1",
      musicName: "Music 1",
    },
    {
      artist: "Artist 2",
      musicName: "Music 2",
    },
    {
      artist: "Artist 3",
      musicName: "Music 3",
    },
    {
      artist: "Artist 4",
      musicName: "Music 4",
    },
  ]);
  return (
    <div>
      <h1>Music List: </h1>
      <div className="music-container">
        {list.map((item) => (
          <MusicItem artist={item.artist} musicName={item.musicName} />
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
