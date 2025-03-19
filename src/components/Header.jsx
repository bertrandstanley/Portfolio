import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    // Navigation container
    <nav>
      {/* Navigation link to About Me page */}
      <NavLink 
        to="/" 
        end // The 'end' ensures that this link is only active on the root path ('/')
        className={({ isActive }) => (isActive ? 'active' : '')} // Adds 'active' class if the link is active
      >
        About Me
      </NavLink>

      {/* Navigation link to Portfolio page */}
      <NavLink 
        to="/portfolio" 
        className={({ isActive }) => (isActive ? 'active' : '')} // Adds 'active' class if the link is active
      >
        Portfolio
      </NavLink>

      {/* Navigation link to Contact Me page */}
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? 'active' : '')} // Adds 'active' class if the link is active
      >
        Contact Me
      </NavLink>

      {/* Navigation link to Resume page */}
      <NavLink 
        to="/resume" 
        className={({ isActive }) => (isActive ? 'active' : '')} // Adds 'active' class if the link is active
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navigation;
