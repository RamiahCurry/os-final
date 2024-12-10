/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Home';
import Login from './Login'; // Import the Login component
import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <Router> {/* Wrap your components with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" Component={() => {
          window.location.href = "https://localhost:3000/app";
          return null;
        }}/>
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </ContextProvider>,
  document.getElementById('root'),
);
