import React, { useState } from 'react';
import Home from '../../../pages/Home/Home';
import "./Layout.css";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Menu from '../../Menu/Menu';

const Layout = () => {
    const [toggle, setToggle] = useState(true);
    
    // Change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className='sidebar-section'>
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className='icon'>
                        <Menu toggle={toggle}/>
                        <p onClick={handleToggle} aria-label={toggle ? "Collapse sidebar" : "Expand sidebar"}>
                            {toggle ? <FiArrowLeftCircle size={30} /> : <FiArrowRightCircle size={30} />}
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <Home />
                </div>
            </div>
        </>
    );
};

export default Layout;
