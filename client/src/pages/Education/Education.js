import React from 'react';
import './Education.css';
import Spin from 'react-reveal/Spin';

const Education = () => {
  const educationData = [
    {
      degree: '11th and 12th Science - GHSEB',
      institution: 'Shree Gyan Guru Vidyalaya',
      year: 'Passed with 87% in PCM',
      description: 'Studied Physics, Chemistry, and Mathematics as core subjects, with a focus on foundational scientific principles and analytical skills.',
    },    
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'VGEC Gandhinagar',
      year: '2022 - 2026',
      description: 'Focused on software development, data structures, and algorithms.',
    },
    {
      degree: 'Web Development Bootcamp 2.0',
      institution: 'Udemy',
      year: '2024',
      description: 'Intensive program covering HTML, CSS, JavaScript, and React.',
    },
  ];

  return (
    <div className='education-container' id='Education'>
      <h2 className='education-title'>Education Details</h2>
      <div className='education-row'>
        {educationData.map((edu, index) => (
          <Spin key={edu.degree}>
            <div className='education-card'>
              <div className='education-card-body'>
                <h5 className='education-card-title'>{edu.degree}</h5>
                <h6 className='education-card-subtitle'>{edu.institution}</h6>
                <p className='education-card-year'>{edu.year}</p>
                {edu.description && <p className='education-card-text'>{edu.description}</p>}
              </div>
            </div>
          </Spin>
        ))}
      </div>
    </div>
  );
};

export default Education;
