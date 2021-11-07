import React from 'react'
import './style.css'
import { FaSistrix } from 'react-icons/fa';  

const Navbar = (props) => {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#"> Home</a></li>
                <li><a href="#"> About Us</a></li>
                <li><a href="#"> Posts</a></li>
                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> Home</a></li>
            </ul>
            <div className="search">
                <input type="text" className="searchInput" placeholder="Search"/>
                 <FaSistrix className="searchIcon" /> 
            </div>
        </div>
    )
}

export default Navbar;
