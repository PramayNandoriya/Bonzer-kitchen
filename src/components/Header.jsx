import React, { useEffect, useState } from 'react';
import "../style/header.css";
import logo from "../Assets/Bonzerlogo.png";
import menu from "../Assets/white-menu.png";
import closeIcon from "../Assets/close.png";
import { Link } from 'react-scroll';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <img className="logoImg" src={logo} alt='logo' />

            {/* Desktop menu */}
            <div className="li">
                {/* <Link to="/home" smooth={true} duration={200}>Home</Link>
                <Link to="/products" smooth={true} duration={200}>Products</Link>
                <Link to="/aboutUs" smooth={true} duration={200}>About Us</Link>
                <Link to="/location" smooth={true} duration={200}>Location</Link>
                <Link to="/contactUs" smooth={true} duration={200}>Contact Us</Link> */}
                <a href='#home'>Home</a>
                <a href='#products'>Products</a>
                <a href='#aboutUs'>About Us</a>
                <a href='#location'>Location</a>
                <a href='#contactUs'>Contact Us</a>


            </div>

            {/* Mobile menu */}
            <div className='mobileMenu'>
                <div className='menuIcon' onClick={toggleMenu}>
                    <img src={isMenuOpen ? closeIcon : menu} alt="Menu Icon" />
                </div>

                {isMenuOpen && (
                    <div className='mobileLi'>
                        <a href='#home'>Home</a>
                        <a href='#products'>Products</a>
                        <a href='#aboutUs'>About Us</a>
                        <a href='#location'>Location</a>
                        <a href='#contactUs'>Contact Us</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
