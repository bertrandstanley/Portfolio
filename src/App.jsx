import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components for routing
import AboutMe from './pages/AboutMe'; // Import AboutMe component
import Portfolio from './pages/Portfolio'; // Import Portfolio component
import Contact from './pages/Contact'; // Import Contact component
import Resume from './pages/Resume'; // Import Resume component
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component

const AppRoutes = () => {
  return (
    <Router> {/* Router component that wraps all your routing logic */}
      <div>
        <Header /> {/* The Header component will be displayed on all pages */}
        
        <Routes> {/* The Routes component will handle different paths and render the corresponding component */}
          <Route path="/" element={<AboutMe />} /> {/* Default route, renders AboutMe component when the user is at the root path */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
          <Route path="/resume" element={<Resume />} /> {/* Resume page route */}
        </Routes>
        
        <Footer /> {/* The Footer component will be displayed on all pages */}
      </div>
    </Router>
  );
};

export default AppRoutes;
