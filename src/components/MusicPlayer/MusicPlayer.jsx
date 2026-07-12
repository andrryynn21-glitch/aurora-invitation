import { forwardRef, useState } from "react";
import "./MusicPlayer.css";

const MusicPlayer = forwardRef(({ music }, ref) => {
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      ref.current.play();

      setPlaying(true);
    } else {
      ref.current.pause();

      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={ref} src={music} loop />

      <button
        className={`music-button ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        🎵
      </button>
    </>
  );
});

export default MusicPlayer;
