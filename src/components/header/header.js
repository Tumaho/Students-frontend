import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import './header.css';


function Header() {

    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>ASAC</div>
            <div className='navbar__item'>Home</div>
            <div className='navbar__item'>Contact Us</div>
        </header>
    );
}

export default Header;