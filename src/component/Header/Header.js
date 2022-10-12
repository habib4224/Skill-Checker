import React from 'react';
import './Header.css';
import hm from './Header-image.jpg'
const Header = () => {
    return (
        <div className='allinfo'>
            <img className='header-img' src={hm} alt="Logo" />
            <h1 className='Htext'>Assalamu Alaikum. Welcome to skill checker. Here you can test your skills on web development.</h1>
        </div>

    );
};

export default Header;