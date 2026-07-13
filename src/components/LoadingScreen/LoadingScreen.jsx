import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <section className="loading">
      <div className="loading__content">
        <p>THE WEDDING OF</p>

        <h1>
          Reno
          <span>&</span>
          Vina
        </h1>

        <div className="loading__circle"></div>

        <span>Preparing Invitation...</span>
      </div>
    </section>
  );
}

export default LoadingScreen;
