import React from 'react';
import './TechStackIconContainer.css';
function TechStackIconContainer({name, image, altProperty}){
    return (
        <div className='techstack-icons'>
            <img src={image} alt={altProperty}/>
            <p>{name}</p>
        </div>
    )
}
export default TechStackIconContainer