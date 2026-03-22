import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// This is an important line. It tells React to render the App component inside the element with the id of 'root' in the HTML file. This is where our React application will be displayed on the webpage.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
