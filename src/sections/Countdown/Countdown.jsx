import { useEffect, useState } from "react";
import "./Countdown.css";

import invitationData from "../../data/invitation";

function Countdown() {
  const calculateTime = () => {
    const weddingDate = new Date("December 12, 2027 08:00:00").getTime();

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),

      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),

      minutes: Math.floor((distance / (1000 * 60)) % 60),

      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <p>MENUJU HARI BAHAGIA</p>

      <h2>
        {invitationData.couple.groom}&{invitationData.couple.bride}
      </h2>

      <div className="countdown__box">
        <div>
          <h3>{time.days}</h3>
          <span>Hari</span>
        </div>

        <div>
          <h3>{time.hours}</h3>
          <span>Jam</span>
        </div>

        <div>
          <h3>{time.minutes}</h3>
          <span>Menit</span>
        </div>

        <div>
          <h3>{time.seconds}</h3>
          <span>Detik</span>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
