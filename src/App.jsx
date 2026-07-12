import { useRef, useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import Opening from "./sections/Opening/Opening";
import Hero from "./sections/Hero/Hero";

import Couple from "./sections/Couple/Couple";
import Event from "./sections/Event/Event";
import Countdown from "./sections/Countdown/Countdown";
import Story from "./sections/Story/Story";
import Gallery from "./sections/Gallery/Gallery";
import Gift from "./sections/Gift/Gift";
import RSVP from "./sections/RSVP/RSVP";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

import weddingMusic from "./assets/music/wedding.mp3";

function App() {
  const audioRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    document.getElementById("hero").scrollIntoView({
      behavior: "smooth",
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MusicPlayer ref={audioRef} music={weddingMusic} />

      <Opening onOpen={handleOpenInvitation} />

      <Hero />

      <Couple />

      <Event />

      <Countdown />

      <Story />

      <Gallery />

      <Gift />

      <RSVP />
    </>
  );
}

export default App;
