import React, { useEffect, useState } from 'react';
import "../style/header.css";
import logo from "../Assets/Bonzerlogo.png";
import menu from "../Assets/white-menu.png";
import closeIcon from "../Assets/close.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='header'>
            <img className="logoImg" src={logo} alt='logo' onClick={()=>{window.location.hash="#home"}}/>

            {/* Desktop menu */}
            <div className="li">
                <a href='#home'>Home</a>
                <a href='#products'>Products</a>
                <a href='#aboutUs'>About Us</a>
                <a href='#location'>Location</a>
                <a href='#contactUs'>Contact Us</a>
            </div>

            {/* Mobile menu */}
            <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
                <div className='menuIcon' onClick={toggleMenu}>
                    <img src={isMenuOpen ? closeIcon : menu} alt="Menu Icon" />
                </div>

                {isMenuOpen && (
                    <div className='mobileLi'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                        <a href='#products' onClick={closeMenu}>Products</a>
                        <a href='#aboutUs' onClick={closeMenu}>About Us</a>
                        <a href='#location' onClick={closeMenu}>Location</a>
                        <a href='#contactUs' onClick={closeMenu}>Contact Us</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;