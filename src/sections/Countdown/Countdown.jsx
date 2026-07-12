import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const targetDate = new Date("December 12, 2027 08:00:00").getTime();

  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown" data-aos="zoom-in">
      <div className="countdown__title">
        <p>COUNTDOWN</p>

        <h2>Menuju Hari Bahagia</h2>
      </div>

      <div className="countdown__box">
        <div>
          <h3>{time.days || 0}</h3>

          <span>Hari</span>
        </div>

        <div>
          <h3>{time.hours || 0}</h3>

          <span>Jam</span>
        </div>

        <div>
          <h3>{time.minutes || 0}</h3>

          <span>Menit</span>
        </div>

        <div>
          <h3>{time.seconds || 0}</h3>

          <span>Detik</span>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
