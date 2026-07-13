import AOS from "aos";
import "aos/dist/aos.css";

import { useRef, useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import Opening from "./sections/Opening/Opening";

import themes from "./themes/themeConfig";

import Guestbook from "./sections/Guestbook/Guestbook";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

import weddingMusic from "./assets/music/wedding.mp3";

function App() {
  const audioRef = useRef();

  const [loading, setLoading] = useState(true);

  // aktifkan tema

  const Theme = themes.luxury;

  useEffect(() => {
    // AOS Animation

    AOS.init({
      duration: 1200,

      once: true,

      offset: 100,
    });

    // Loading Screen

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MusicPlayer ref={audioRef} music={weddingMusic} />

      <Opening onOpen={handleOpenInvitation} />

      {/* THEME LUXURY */}

      <Theme.hero />

      <Theme.couple />

      <Theme.event />

      <Theme.countdown />

      <Theme.story />

      <Theme.gallery />

      <Theme.gift />

      <Theme.rsvp />

      {/* GLOBAL */}

      <Guestbook />
    </>
  );
}

export default App;
