import React, { useState } from "react";
import MusicItem from "../Music/MusicItem";

const MusicPage = () => {
  const [list, setList] = useState([
    {
      id: 1,
      artist: "Artist 1",
      musicName: "Music 1",
    },
    {
      id: 2,
      artist: "Artist 2",
      musicName: "Music 2",
    },
    {
      id: 3,
      artist: "Artist 3",
      musicName: "Music 3",
    },
    {
      id: 4,
      artist: "Artist 4",
      musicName: "Music 4",
    },
  ]);
  return (
    <div className="container">
      <h1 className="my-4">Music List:</h1>
      <div className="row">
        {list.map((item, index) => (
          <MusicItem
            key={index}
            id={item}
            artist={item.artist}
            musicName={item.musicName}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
