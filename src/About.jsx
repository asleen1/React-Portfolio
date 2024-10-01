import React from 'react';

export default function AboutMe() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Hlo everyone!</h2>

            <img
                src="/WhatsApp Image 2024-08-26 at 17.06.10_2c5352c4.jpg" // Ensure this is in the public folder
                alt="Jasleen Kaur"
                style={{ width: '200px', height: 'auto', borderRadius: '50%', marginBottom: '20px' }}
            />
            
            <p>
                My name is <strong>Jasleen Kaur</strong>, and I am originally from India. I am currently in my third semester at <strong>Centennial College</strong>, where I am pursuing my studies with enthusiasm. I have a passion for learning and a keen interest in technology and software development. I am excited about the opportunities ahead as I expand my skills and knowledge in this dynamic field.
            </p>

            <p>
                You can download my resume here: 
                <a href="/B RESUME. pdf (1).docx" target="_blank" rel="noopener noreferrer">Resume</a>.  {/* Make sure the file name is correct */}
            </p>
        </div>
    );
}
