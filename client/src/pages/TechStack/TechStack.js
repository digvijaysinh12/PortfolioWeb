import React from 'react';
import './Techstack.css';
import { TechStacklist } from '../../utils/TechStacklist';
import RubberBand from 'react-reveal/RubberBand'; // Fixed typo
import Fade from 'react-reveal/Fade';

const TechStack = () => {
  return (
    <div className="techstack-container" id='Tech'>
      <RubberBand>
        <h2>Technology Stack</h2>
        <p className="description">
          👉 Including programming languages, frameworks, databases, front-end and back-end tools, and APIs
        </p>
      </RubberBand>

      <div className="techstack-grid">
        <Fade left>
          {TechStacklist.map((tech) => (
            <div className="tech-card" key={tech._id || tech.name}> {/* Use unique key */}
              <div className="tech-card-body">
                {/* Ensure tech.icon is a valid component */}
                <tech.icon className="tech-icon" aria-label={tech.name} />
                <h5 className="tech-name">{tech.name}</h5>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default TechStack;
