import React from 'react';
import './Menu.css';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        
        <div className='navbar-menu'>
          <Zoom>
            <div className='navbar-profile-pic'>
            <img 
              src='./source/menu-pic.png' 
              alt='Menu Profile'
            />
          </div>
          </Zoom>
          <Fade left>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='home' spy={true} smooth={true} offset={-100} duration={5} >
              <IoIosHome/>
              Home
              </Link>
              </div>
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='about' spy={true} smooth={true} offset={-100} duration={5} >
                <FcAbout/>
                About
              </Link>          
            </div>
          </div>
          
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='Tech' spy={true} smooth={true} offset={-100} duration={5} >
                <GrTechnology/>
                Tech Stack
              </Link> 
            </div> 
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='Education' spy={true} smooth={true} offset={-100} duration={5} >
                <FaBookReader/>
                Education
              </Link>           
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='Projects' spy={true} smooth={true} offset={-100} duration={5} >
                <GrProjects/>
                Projects
              </Link> 
            </div>
          </div>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='Contact' spy={true} smooth={true} offset={-100} duration={5} >
                <IoMdContact/>
                Contact
              </Link> 
              </div>
          </div>
          </Fade>
        </div>
        
      ) : (
        <>
        <div className='menu-container'>
        <div className='navbar-menu'>
          <div className='nav-item'>
            <div className='nav-link'><IoIosHome title='Home'/></div>
            {/* You can add more nav links here */}
          </div>
          <div className='nav-item'>
            <div className='nav-link'><FcAbout title='About'/></div>
            {/* You can add more nav links here */}
          </div>
          <div className='nav-item'>
            <div className='nav-link'><FaBookReader title='Education'/></div>
            {/* You can add more nav links here */}
          </div>
          <div className='nav-item'>
            <div className='nav-link'><GrTechnology title='Technology Stack'/></div>
            {/* You can add more nav links here */}
          </div>
          <div className='nav-item'>
            <div className='nav-link'><GrProjects title='Projects'/></div>
            {/* You can add more nav links here */}
          </div>
          <div className='nav-item'>
            <div className='nav-link'><IoMdContact title='Contact'/></div>
            {/* You can add more nav links here */}
          </div>
        </div>

        </div>
        </>
      )}
    </>
  );
};

export default Menu;
