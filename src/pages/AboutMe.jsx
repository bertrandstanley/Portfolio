import '/src/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me"> {/* Main section for the "About Me" section of the page */}
      <div className="about-me-box"> {/* Container box for the entire "About Me" content */}
        <div className="about-me-container"> {/* Inner container to group all the content together */}
        
          {/* Image Placeholder for Profile Image */}
          <div className="image-placeholder">
            <img src="/images/Stanley-Bertrand.png" alt="Your Name" className="profile-image" /> {/* Profile image */}
          </div>

          {/* Name Heading */}
          <h1>Stanley Bertrand</h1> {/* Your name displayed as the main heading */}

          {/* Professional Roles Heading */}
          <h3>Digital Marketer | Full Stack Developer | UX/UI Designer | Musician</h3> {/* Your professional titles */}

          {/* Brief Description */}
          <p>
            Creative professional with expertise in digital marketing, web development, telecommunications, media, and music. Leverages these skills to deliver impactful content, campaigns, and experiences that drive brand awareness.
          </p> {/* A paragraph describing your skills and experience */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
