import React from 'react';
import './TechStack.css';
import html from '../../image/html.png';
import javascript from '../../image/javascript-logo.png';
import css from '../../image/css-logo.png';
import reactjs from '../../image/react.png';
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';


function TechStack(){

    const techstackdata = [
        {
            iconName: "HTML",
            iconImage: html,
            iconAltProperty: "htmlImage"
        },
        {
            iconName: "JavaScript",
            iconImage: javascript,
            iconAltProperty: "jsImage"
        },
        {
            iconName: "CSS",
            iconImage: css,
            iconAltProperty: "csslImage"
        },
        {
            iconName: "React",
            iconImage: reactjs,
            iconAltProperty: "reactImage"
        },


    ];
    return (
        <div id='tools' className='techstack-container'>
            <p className='techstack-title'>Tech Stack</p>
            <div className='techstack-icon-container'>
            {techstackdata.map((item, index) => {
                return(
                    <TechStackIconContainer
                    key={index}
                    image={item.iconImage}
                    altProperty={item.iconAltProperty}
                    name={item.iconName}
                    />
                )
              })}
            </div>
        </div>
    )
}
export default TechStack