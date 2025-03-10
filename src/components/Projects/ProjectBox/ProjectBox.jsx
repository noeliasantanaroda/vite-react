import React from 'react';
import './ProjectBox.css';

function ProjectBox({image, title, sentences, link}){

    return(
        <div className='project-box-container'>
            <div className='project-box-img-cont'>
                <img src={image}/>
            </div>
            <div className='project-box-desc-cont'>
                <p className='project-box-title'>{title}</p>
                <div className='project-box-sent-cont'>
                    {sentences.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </div>
                <p className='project-box-link'>
                    <span>Link</span>
                    <a href={link} target='_blank'>
                        {link}
                    </a>
                </p>
            </div>
        </div>
    
    )
}
export default ProjectBox
