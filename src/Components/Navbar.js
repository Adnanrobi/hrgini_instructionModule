import React from 'react';
import {useRef} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import '../App.css';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiveNav");
    }
    return (
        <header className="navbar__">
            <h3>HR gini</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Settings</a>
                <a href="/#">Help</a>
                <a href="/#">Search</a>
                <a href="/#">Notification</a>
                <a href="/#">Profile</a>
                <button className="navBtn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="navCloseBtn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;