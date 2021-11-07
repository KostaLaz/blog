import React, { useState } from 'react'
import './style.css'
import { FaSistrix } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    
    const submitSearch = (e) => {
        e.preventDefault();
        alert('SEARCH');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';
    

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/"> Home</NavLink></li>
                <li><NavLink to="about-us"> About Us</NavLink></li>
                <li><NavLink to="/post"> Posts</NavLink></li>
                <li><NavLink to="/contact-us"> Contact Us</NavLink></li>
            </ul>
            <form onSubmit={submitSearch}>
                <div className="search">
                    <input type="text" className={searchClass} placeholder="Search"/>
                    <FaSistrix onClick={openSearch} className="searchIcon" /> 
                </div>
            </form>
        </div>
    )
}

export default Navbar;
