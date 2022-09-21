import React from 'react';

export default function Navbar() {
    return (
      <nav className='navbar'>
        <i className="fa-regular fa-keyboard"></i>
            <header>
                <code>React.js Virtual Keyboard</code>
                <p>created by Ryan Reeves</p>
            </header>
            <div className="navbar-toggler">
            <i className="fa-solid fa-bars"></i><i class="fa-solid fa-chevron-down navbar-hover-arrow"></i>
            </div>
            <div className="nav-link-container collapse">
                <a href="#" className='nav-link' id='github'>Repo Link</a>
                <a href="#" className='nav-link' id='about'>About</a>
                <a href="#" className='nav-link' id='contact'>Contact</a>
            </div>
      </nav>
    );
  }
  