import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import "./MusicPlayer.css";

const MusicPlayer = forwardRef(({ music }, ref) => {
  const audioRef = useRef();

  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current.play();

      setPlaying(true);
    },
  }));

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
      <audio ref={audioRef} src={music} loop />

      <button
        className={playing ? "music playing" : "music"}
        onClick={toggleMusic}
      >
        🎵
      </button>
    </>
  );
});

export default MusicPlayer;
