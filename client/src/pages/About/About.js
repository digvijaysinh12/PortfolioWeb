import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom'

const About = () => {
    return (
        <div className='about' id='about'>
            <Jump>
            <div className='row'>
                <Zoom>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img
                        src='./source/menu-pic.png'
                        alt='profile_pic'
                    />
                </div>
                </Zoom>
                <div className='col-md-6 about-text'>
                    <h2>About Me</h2>
                    <p>
                        Hello! My name is Digvijaysinh Sarvaiya, and I'm a full stack web developer based in Ahmedabad. I have a passion for creating dynamic and responsive web applications that enhance user experiences.
                        In my free time, I enjoy watching movies, which fuels my creativity and inspires my work. I believe that storytelling, whether through film or web development, has the power to connect people and share ideas.
                        As a developer, I am committed to continuous learning and improvement in my craft. My goal is to stay updated with the latest technologies and trends to deliver innovative solutions.
                        Feel free to connect with me if you'd like to discuss web development, movies, or anything in between! 
                    </p>
                </div>
            </div>
            </Jump>
        </div>
    );
}

export default About;
