import React from 'react';
import './Experience.css';
import { useState} from 'react';
import {useEffect } from 'react';
import ExperienceCards from './ExperienceCards/ExperienceCards';

function Experience() {
    const [experienceData, setExperienceData] = useState([]);
    console.log(experienceData);

    useEffect(() => {
        fetch("experience.json")
        .then((response) => response.json())
        .then((data) => {
            setExperienceData(data.experienceData);
        })
        .catch((error) => {
            console.error("Error fetching experience data: ", error);
        });
    }, []);

    return (
        <div id='experience' className='experience-container'>
            <p className='experience-title'>Experience</p>
            <div className='experience-cards-container'>
                {experienceData.map((experience) => (
                    <ExperienceCards
                        key={experience.id}
                        companyName={experience.companyName}
                        designation={experience.designation}
                        statements={experience.statements} 
                        iconImg={experience.iconImg}
                    />
                ))}
            </div>
        </div>
    );
}

export default Experience;
