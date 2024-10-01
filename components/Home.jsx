/*
  File Name: Home.jsx
  Student’s Name: Jasleen Kaur
  Student ID: 301415170
*/


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function Home() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Hello! I'm Jasleen Kaur, and I'm glad you're here.</p>
            <p>
                <strong>Mission Statement:</strong> My mission is to leverage technology and innovation to create impactful solutions that enhance everyday life.
            </p>
            <p>
                Feel free to explore my work and learn more about me.
            </p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/about" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px' }}>
                    Go to About Me 
                </Link>
            </div>
        </div>
    );
}
