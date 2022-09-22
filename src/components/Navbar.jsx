import React, { useState } from 'react';

export default function Navbar() {
  const [collapsed, toggleCollapse] = useState(true);



    return (
      <nav className='navbar'>
        <i className="fa-regular fa-keyboard"></i>
            <header>
                <code>React.js Virtual Keyboard</code>
                <p>created by Ryan Reeves</p>
            </header>
            <div className={collapsed ? "navbar-toggler" : "navbar-toggler open"} onClick={() => toggleCollapse(!collapsed)}>
            <i className="fa-solid fa-bars"></i><i className="fa-solid fa-chevron-down navbar-hover-arrow"></i>
            <div className={!collapsed ? "nav-link-container" : "nav-link-container collapse"}>
                <a href="#" className='nav-link' id='github'>Repo Link</a>
                <a href="#" className='nav-link' id='about'>About</a>
                <a href="#" className='nav-link' id='contact'>Contact</a>
            </div>
            </div>

      </nav>
    );
  }
  