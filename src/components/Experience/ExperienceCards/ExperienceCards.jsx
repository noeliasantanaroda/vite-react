import React from 'react';
import './ExperienceCards.css';
import html from '../../../image/html.png';
import js from '../../../image/javascript-logo.png';
import css from '../../../image/css-logo.png';
import react from '../../../image/react.png';

function ExperienceCards({ companyName, designation, statements, iconImg }) {
    const getIconImg = (iconName) => {
        switch(iconName) {
            case "html":
                return html;
            case "react":
                return react;
            case "js":
                return js;
            case "css":
                return css;
            default:
                return null;
        }
    }

    return (
        <div className='ex-card-container'>
            <p className='ex-card-title'>{companyName}</p>
            <p className='ex-card-subtitle'>Designation: {designation}</p>

            {statements.map((value, index) => {
              return (
                <p className='ex-card-sentence' key={index}>
                  {value}
                </p>
              );
            })}
            <p className='ex-card-tech-used-title'>Tech Stack Used</p>
            <div className='ex-card-icon-img-cont'>
                {iconImg.map((iconName, index) => (
                    <img key={index} src={getIconImg(iconName)} alt={iconName}/>
            
                ))}
            </div>
        </div>
    );
}

export default ExperienceCards;








