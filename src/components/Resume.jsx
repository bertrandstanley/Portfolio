import '/src/Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <h2>My Skills</h2>
      
      <div className="resume-container">
        
        <div className="resume-section">
          <h3>Digital Marketing</h3>
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
        
        <div className="resume-section">
          <h3>Front End</h3>
          <p>
            HTML (HyperText Markup Language)<br />
            CSS (Cascading Style Sheets)<br />
            JavaScript<br />
            TypeScript<br />
            React
          </p>
        </div>

        <div className="resume-section">
          <h3>Back End</h3>
          <p>
            Node.js<br />
            Express.js<br />
            SQL<br />
            PostgreSQL<br />
            RESTful APIs
          </p>
        </div>
        
        <div className="resume-section">
          <h3>Music Production</h3>
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
