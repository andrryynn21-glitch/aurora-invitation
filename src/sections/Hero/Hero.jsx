import "./Hero.css";
import heroImage from "../../assets/images/hero-couple.jpg";

function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="hero__overlay"></div>

      <img src={heroImage} className="hero__image" />

      <div className="hero__content">
        <p className="hero__subtitle">THE WEDDING OF</p>

        <h1>
          Fulan
          <span>&</span>
          Fulanah
        </h1>

        <p className="hero__date">12 DECEMBER 2027</p>
      </div>
    </section>
  );
}

export default Hero;
