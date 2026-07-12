import { useRef, useState } from "react";
import "./Music.css";

import weddingMusic from "../../assets/music/wedding.mp3";

function Music() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();

      setPlaying(false);
    } else {
      audioRef.current.play();

      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} loop />

      <button
        className={`music ${playing ? "active" : ""}`}
        onClick={toggleMusic}
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}

export default Music;
