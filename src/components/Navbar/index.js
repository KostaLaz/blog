import React, { useState } from 'react'
import './style.css'
import { FaSistrix } from 'react-icons/fa';  

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
                <li><a href="#"> Home</a></li>
                <li><a href="#"> About Us</a></li>
                <li><a href="#"> Posts</a></li>
                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> Home</a></li>
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
