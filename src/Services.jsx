

import React from 'react';

const Services = () => {
    return (
        <div style={servicesStyle}>
            <h1>Services</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <h3>Web Development</h3>
                    <p>I offer full-stack web development services, specializing in creating responsive, user-friendly websites using the latest technologies like React, Node.js, and Express.</p>
                </li>
                <li style={liStyle}>
                    <h3>Consultation</h3>
                    <p>Providing consultation services for software projects, offering guidance on best practices for development, deployment, and scaling applications.</p>
                </li>
                <li style={liStyle}>
                    <h3>SEO Optimization</h3>
                    <p>I help improve your website's visibility on search engines by optimizing your site content, structure, and performance for better rankings.</p>
                </li>
            </ul>
        </div>
    );
};

// Styles
const servicesStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
};

const ulStyle = {
    listStyleType: 'none',
    padding: 0,
};

const liStyle = {
    marginBottom: '20px',
};

export default Services;
