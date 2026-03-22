import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// Making the change to test the workflow. This is an important line. It tells React to render the App component inside the element with the id of 'root' in the HTML file. This is where our React application will be displayed on the webpage.
//Change 2
// Skip the workflow

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
