import React from 'react';
import './Homepage.css';
import githubIcon from '../../image/github.png';
import linkedinIcon from '../../image/linkedin.png';
function Homepage(){
    return (
        <div className='homepage-container'>
           <div id='about' className='homepage-left'>
            <p className='homepage-left-h1'>
                <span>Hi</span> my name is
            </p>
            <p className='violet-color homepage-left-h2'>Noe Santana</p>
            <p className='homepage-left-h3'>
                Developer student at <span className='violet-color'>JAP Ceibal</span>
            </p>
            <p className='homepage-left-description'>
            I have practice and theoretical knowledge about HTML5 language, CSS, JS, uses of frameworks like React and Angular, UX/UI tools like figma.
            I am eager to grow in the IT world
            </p>
            <div>
            <a href='' target='_blank'>
                    <img src={githubIcon} alt='githubIconImage'className='homepage-logo'/>
                </a>
                <a href='' target='_blank'>
                    <img src={linkedinIcon} alt='linkedinIconImage'className='homepage-logo'/>
                </a>
            </div>
            <a href='noelia.sroda@gmail.com'>
               <button className='homepage-left-button'>Get In Touch</button> 
            </a>
            </div>
            <div className='homepage-right'>
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*qdAW1TjCN57h1lbuuzvchg.gif' alt='GIF'/>
            </div>
        </div> 
    )
}
export default Homepage