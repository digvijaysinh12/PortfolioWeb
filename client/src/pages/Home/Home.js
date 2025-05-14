import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="container home-content">
        <Fade right>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  'FullStack Developer!',
                  'MERN Stack Developer!',
                  'React Native Developer!',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
        </Fade>
        <Fade bottom>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=919913596339"
              aria-label="Hire Me via WhatsApp"
            >
              Hire Me
            </a>
            <a
              className="btn btn-cv"
              href={Resume}
              download="Digvijaysinh.pdf"
              aria-label="Download Resume"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
