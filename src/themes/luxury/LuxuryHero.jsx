import "./LuxuryHero.css";
import heroImage from "../../assets/images/hero-couple.jpg";
import invitationData from "../../data/invitation";
function LuxuryHero() {
  return (
    <section id="hero" className="luxury-hero" data-aos="fade-up">
      <div className="luxury-hero__overlay"></div>

      <img src={heroImage} className="luxury-hero__image" />

      <div className="luxury-hero__content">
        <p>THE WEDDING OF</p>

        <h1>{invitationData.couple.groom}</h1>

        <span>&</span>

        <h1>{invitationData.couple.bride}</h1>

        <p>{invitationData.event.date}</p>
      </div>
    </section>
  );
}

export default LuxuryHero;
