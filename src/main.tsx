import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Grab the root element from HTML
const rootElement = document.getElementById('root');

// Check if it exists
if (!rootElement) {
  // This will help you catch issues in case #root is missing
  console.error("❌ Could not find root element in index.html");
  alert("Root element not found. Something is wrong with your HTML!");
} else {
  // ✅ Safely render the App
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
