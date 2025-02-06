import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router';

export default function Header() {


    return (
        <>
            <div id="header">

                <div className="top">

                    {/* Logo */}
                    <div id="logo">
                        <span className="image avatar48"><img src="./images/avatar.jpg" alt="" /></span>
                        <h1 id="title">Anthony Schwab</h1>
                        <p>Software Developer</p>
                    </div>

                    {/* Nav */}
                    <nav id="nav">
                        <ul>
                            <li><Link to='/' id="top-link"><span className="icon solid fa-home">Intro</span></Link></li>
                            <li><Link to='portfolio' id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></Link></li>
                            <li><Link to='about' id="about-link"><span className="icon solid fa-user">About Me</span></Link></li>
                            <li><Link to='contact' id="contact-link"><span className="icon solid fa-envelope">Contact</span></Link></li>
                        </ul>
                    </nav>

                </div>

                <div className="bottom">

                    {/* Social Icons */}
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                    </ul>

                </div>

            </div>
        </>
    );
}