import React from 'react'; // Import React to enable JSX syntax
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app to the DOM
import AppRoutes from './App'; // Import the main routing component (AppRoutes)
import './Styles.css'; // Import the global styles for the app

// Render the root of the app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* StrictMode helps highlight potential issues in the app during development */}
    <AppRoutes /> {/* The AppRoutes component that contains the routing logic */}
  </React.StrictMode>
);
