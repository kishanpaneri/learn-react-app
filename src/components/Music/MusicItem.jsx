import React, { useState } from "react";
import music from "../../assets/images/music.webp";
import { FaPause, FaPlay } from "react-icons/fa";

const MusicItem = ({ musicName, artist }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  return (
    <div className="music-box">
      <img src={music} alt="Music" width={200} />
      <div className="music-name">{musicName}</div>
      <div className="music-artist">{artist}</div>
      <div onClick={handlePlay} className="play-btn">
        {play === true ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
};

export default MusicItem;
