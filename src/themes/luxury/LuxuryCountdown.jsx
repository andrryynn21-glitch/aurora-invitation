import { useEffect, useState } from "react";
import "./LuxuryCountdown.css";

import invitationData from "../../data/invitation";

function LuxuryCountdown() {
  const calculateTime = () => {
    const target = new Date(invitationData.event.countdown).getTime();

    const now = new Date().getTime();

    const distance = target - now;

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

      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),

      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),

      seconds: Math.floor((distance % (1000 * 60)) / 1000),
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
    <section className="luxury-countdown" data-aos="fade-up">
      <p className="luxury-countdown__subtitle">MENUJU HARI BAHAGIA</p>

      <h2>
        {invitationData.couple.groom}
        <span>&</span>
        {invitationData.couple.bride}
      </h2>

      <div className="luxury-countdown__grid">
        <div className="count-box">
          <strong>{time.days}</strong>

          <p>Hari</p>
        </div>

        <div className="count-box">
          <strong>{time.hours}</strong>

          <p>Jam</p>
        </div>

        <div className="count-box">
          <strong>{time.minutes}</strong>

          <p>Menit</p>
        </div>

        <div className="count-box">
          <strong>{time.seconds}</strong>

          <p>Detik</p>
        </div>
      </div>
    </section>
  );
}

export default LuxuryCountdown;
