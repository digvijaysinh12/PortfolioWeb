import { useState } from 'react';
import React from 'react';
import './mobileNav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineMenuFold } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-scroll';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="mobileNav">
            <div className="mobileNav-header">
                {open ? (
                    <AiOutlineMenuFold
                        size={30}
                        className="mobile-nav-icon"
                        onClick={handleOpen}
                    />
                ) : (
                    <GiHamburgerMenu
                        size={30}
                        className="mobile-nav-icon"
                        onClick={handleOpen}
                    />
                )}
                <span className="mobile-nav-title">My Portfolio App</span>
            </div>
            {open && (
                <div className="mobileNav-menu">
                    <div className="navbar-menu">
                        <Zoom>
                            <div className="navbar-profile-pic">
                                <img
                                    src="./source/menu-pic.png"
                                    alt="Menu Profile"
                                />
                            </div>
                        </Zoom>
                        <Fade left>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <IoIosHome />
                                        Home
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="Tech"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <GrTechnology />
                                        Tech Stack
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="Education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <FaBookReader />
                                        Education
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="Projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <GrProjects />
                                        Projects
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <IoMdContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
