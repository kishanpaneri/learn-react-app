import React, { useState } from "react";
import music from "../../assets/images/music.webp";
import { FaPause, FaPlay } from "react-icons/fa";

const MusicItem = ({ musicName, artist, id }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card text-center">
        <img
          src={music}
          alt="Music"
          className="card-img-top"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{musicName}</h5>
          <p className="card-text">{artist}</p>
          <button
            onClick={handlePlay}
            className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px", margin: "0 auto" }}
          >
            {play ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicItem;
