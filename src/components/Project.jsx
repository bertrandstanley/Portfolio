import PropTypes from 'prop-types';

const Project = ({ title, image, deployedUrl, githubUrl }) => {
  return (
    // Project card container
    <div className="project-card">
      
      {/* Link to deployed project */}
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          {/* Display the project image */}
          <img src={image} alt={title} />
        </div>
      </a>

      {/* Buttons section for GitHub and web deployment */}
      <div className="buttons">
        
        {/* GitHub button with link */}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button">
          <img src="/images/Github White Circle Logo.png" alt="GitHub" />
        </a>

        {/* Web deployment button with link */}
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="button">
          <img src="/images/Web White Logo.png" alt="Web Deployment" />
        </a>
      </div>
    </div>
  );
};

// Define prop types for the Project component for validation
Project.propTypes = {
  title: PropTypes.string.isRequired,  // title must be a string and required
  image: PropTypes.string.isRequired,  // image must be a string and required
  deployedUrl: PropTypes.string.isRequired, // deployedUrl must be a string and required
  githubUrl: PropTypes.string.isRequired,  // githubUrl must be a string and required
};

export default Project;
