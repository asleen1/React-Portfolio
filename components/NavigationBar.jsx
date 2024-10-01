// components/Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={navStyle}>
            <div style={logoStyle}>
                <h2 style={{ margin: 0, color: '#fff' }}>J.K.</h2> {/* Custom Logo with initials */}
            </div>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
                <li style={liStyle}><Link to="/about" style={linkStyle}>About Me</Link></li>
                <li style={liStyle}><Link to="/projects" style={linkStyle}>Projects</Link></li>
                <li style={liStyle}><Link to="/education" style={linkStyle}>Education</Link></li>
            </ul>
        </nav>
    );
};

// Styles
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007BFF', // You can change the color to match your theme
};

const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const ulStyle = {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
};

const liStyle = {
    margin: '0 15px',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff', // Consider changing to a lighter color for better contrast
    fontWeight: 'bold',
};

// Exporting the Navigation component
export default Navigation;
