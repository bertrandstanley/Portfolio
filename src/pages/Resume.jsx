import '/src/Resume.css';

const Resume = () => {
  return (
    <section id="resume"> {/* This section represents the main "Resume" section of the page */}
      <h2>My Skills</h2> {/* This heading introduces the skills listed below */}

      {/* This link allows the user to download your resume as a PDF */}
      <a href="/Stanley Bertrand - Resume.pdf" download>
        CLICK HERE <br /> {/* "CLICK HERE" text for downloading the resume */}
        <span style={{ color: 'black' }}>to download my resume</span> {/* Text to encourage users to download */}
      </a>

      {/* The container that holds all the sections of skills */}
      <div className="resume-container">
        
        {/* Digital Marketing Skills Section */}
        <div className="resume-section">
          <h3>Digital Marketing</h3> {/* Heading for Digital Marketing skills */}
          <p>
            SEO (Search Engine Optimization)<br />
            Content Marketing<br />
            Social Media Marketing<br />
            Email Marketing<br />
            Google Analytics<br />
            Conversion Rate Optimization<br />
            PPC (Pay-Per-Click) Advertising<br />
            Data Analysis and Reporting<br />
            Marketing Automation<br />
            Branding<br />
            E-commerce<br />
            Graphic Design<br />
            UX/UI
          </p>
        </div>

        {/* Front End Development Skills Section */}
        <div className="resume-section">
          <h3>Front End</h3> {/* Heading for Front End skills */}
          <p>
            HTML (HyperText Markup Language)<br />
            CSS (Cascading Style Sheets)<br />
            JavaScript<br />
            TypeScript<br />
            React
          </p>
        </div>

        {/* Back End Development Skills Section */}
        <div className="resume-section">
          <h3>Back End</h3> {/* Heading for Back End skills */}
          <p>
            Node.js<br />
            Express.js<br />
            SQL<br />
            PostgreSQL<br />
            RESTful APIs
          </p>
        </div>

        {/* Music Production Skills Section */}
        <div className="resume-section">
          <h3>Music Production</h3> {/* Heading for Music Production skills */}
          <p>
            DJ<br />
            Beat Making<br />
            Mixing and Mastering<br />
            Music Production<br />
            Digital Audio Workstation (DAW)<br />
            Audio Editing<br />
            Sound Engineering<br />
            Music Licensing and Copyrights<br />
            Music Business
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
