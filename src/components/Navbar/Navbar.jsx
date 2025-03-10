import React from 'react';
import './Navbar.css';
function Navbar(){
    let name = "NS"
    return (
        <div className= 'navbar-container'>
          <div className='navbar-left'>{name}</div>
          <div className='navbar-rigth'>
            <p>
                <a href='#about'>About</a>
            </p>
            <p>
                <a href='#tools'>Tools</a>
            </p>
            <p>
                <a href='#experience'>Experience</a>
            </p>
            <p>
                <a href='#projects'>Projects</a>
            </p>
          </div>
          </div>
    )
}
export default Navbar