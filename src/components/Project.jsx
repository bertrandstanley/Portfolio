import PropTypes from 'prop-types'

const Project = ({ title, image, deployedUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="buttons">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button">
          <img src="/images/Github White Circle Logo.png" alt="GitHub" />
        </a>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="button">
          <img src="/images/Web White Logo.png" alt="Web Deployment" />
        </a>
      </div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
}

export default Project
