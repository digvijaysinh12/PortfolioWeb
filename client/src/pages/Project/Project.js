import React from 'react';
import './Project.css';
import Spin from 'react-reveal/Spin'

const Project = () => {
  return (
    <div className="project-container" id='Projects'>
      <h1>My Projects</h1>
      <div className="project-grid">
        <Spin>
        <div className="project-card">
          <h2>Personal Portfolio Web Site</h2>
          <p>This is a brief description of Project 1. It highlights the main features and technologies used.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>This is a brief description of Project 2. It highlights the main features and technologies used.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <h2>Project 3</h2>
          <p>This is a brief description of Project 3. It highlights the main features and technologies used.</p>
          <button>View Project</button>
        </div>
        </Spin>
      </div>
    </div>
  );
};

export default Project;
