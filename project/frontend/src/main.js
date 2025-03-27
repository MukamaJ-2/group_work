import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(
      React.StrictMode, 
      null, 
      React.createElement(App, null)
    )
  );
} else {
  console.error("Root element not found. Check if <div id='root'></div> exists in index.html.");
}