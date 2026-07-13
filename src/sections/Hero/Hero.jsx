import "./Hero.css";

import heroImage from "../../assets/images/hero-couple.jpg";
import invitationData from "../../data/invitation.js";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay"></div>

      <img src={heroImage} className="hero__image" />

      <div className="hero__content">
        <p className="hero__subtitle">THE WEDDING OF</p>

        <h1>{invitationData.couple.groom}</h1>

        <span className="hero__amp">&</span>

        <h1>{invitationData.couple.bride}</h1>

        <p className="hero__date">
          {invitationData.event.day}, {invitationData.event.date}
        </p>
      </div>
    </section>
  );
}

export default Hero;
