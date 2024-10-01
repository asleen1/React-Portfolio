/*
  File Name: main.jsx
  Student’s Name: Jasleen Kaur
  Student ID: 301415170
*/



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure this line is included to style your application

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
