import '/src/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-box">
        <div className="about-me-container">
          <div className="image-placeholder">
            <img src="/images/Stanley-Bertrand.png" alt="Your Name" className="profile-image" />
          </div>

          <h1>Stanley Bertrand</h1>

          <h2>Digital Marketer | Software Developer | DJ | Music Producer</h2>

          <p>
            Creative professional with expertise in digital marketing, web development, telecommunications, media, and music. Leverages these skills to deliver impactful content, campaigns, and experiences that drive brand awareness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
