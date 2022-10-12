import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavLink } from 'react-router-dom';
import './Nabvars.css'
const Navbars = () => {
    return (
        <div>
            <Navbar className='navFull'>
                <ul className=" navbars">
                    <div className='Heading'><h3 >Skill Checker</h3></div>

                    <div className='items'>
                        <li><NavLink className={({ isActive }) => isActive ? ' active' : undefined} to='/home'>Home</NavLink></li>
                        <li>
                            <NavLink to='/topics'>Topics</NavLink>
                        </li>
                        <li><NavLink to='/chart'>Chart</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li></div>


                </ul>

            </Navbar >
        </div >
    );
};

export default Navbars;