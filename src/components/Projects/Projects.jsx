import React from 'react';
import './Projects.css';
import  { useState} from 'react';
import { useEffect } from 'react';
import ProjectBox from './ProjectBox/ProjectBox';
function Projects() {
    const [projectData, setProjectsData] = useState([]);
    console.log(projectData);

    useEffect(() => {
        fetch("projects.json")
        .then((response) => response.json())
        .then((data) => {
            setProjectsData(data.projectData);
        }).catch((error) => {
            console.error("Error fetching projects data: ", error);
        });
    }, []);

    return (
        <div>
            <p className='projects-title' >Projects</p>
            <div id='projects' className='projects-box-container'>
                {projectData.map((value, index) => (
                    <ProjectBox
                    key={index}
                    title={value.title}
                    image={value.image}
                    sentences={value.sentences}
                    link={value.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
