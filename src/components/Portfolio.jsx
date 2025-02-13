import '/src/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Coding Projects</h2>
      <div className="projects">

        <div className="project-card">
          <a href="https://bertrandstanley.github.io/BUMSYST/" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/BUMSYST FLyer.png" alt="BUMSYST - Budget Management System" />
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="https://github.com/bertrandstanley/Vehicle-Builder.git" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/Vehicle Builder.png" alt="Vehicle Builder" />
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="https://github.com/bertrandstanley/Blogs-Posts.git" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/Blogs Posts Flyer.png" alt="Blogs-Posts" />
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="https://github.com/bertrandstanley/Employee-Tracker.git" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/Employee Tracker.png" alt="Employee Tracker" />
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="https://github.com/bertrandstanley/README-Generator.git" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/README Generator Flyer.png" alt="README Generator" />
            </div>
          </a>
        </div>

        <div className="project-card">
          <a href="https://github.com/bertrandstanley/Weather-Dashboard.git" target="_blank" rel="noopener noreferrer">
            <div className="project-image">
              <img src="/src/assets/Weather Dashboard Flyer.png" alt="Weather Dashboard" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
