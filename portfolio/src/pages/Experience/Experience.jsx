import "./Experience.css";
import Skill from "../../components/Skill/Skill.jsx";
import Project from "../../components/Project/Project.jsx";
import { useState } from 'react';

export default function Experience() {
    
    const numberOfSkillsPerPage = 6;
    const skillList = 
    [
        {
            name: 'Python',
            confidence: 90
        },
        {
            name: 'C#',
            confidence: 90
        },
        {
            name: 'Java',
            confidence: 85
        },
        {
            name: 'HTML',
            confidence: 85
        },
        {
            name: 'CSS',
            confidence: 80
        },
        {
            name: 'JavaScript',
            confidence: 90
        },
        {
            name: 'TypeScript',
            confidence: 80
        },
        {
            name: 'React',
            confidence: 80
        },
        {
            name: 'Angular',
            confidence: 80
        },
        {
            name: 'Git',
            confidence: 90
        },
        {
            name: 'SQL Server',
            confidence: 85
        },
        {
            name: 'Unix',
            confidence: 80
        },
        {
            name: 'NodeJS',
            confidence: 85
        },
        {
            name: 'NextJS',
            confidence: 70
        },
        {
            name: '.NET',
            confidence: 85
        },
        {
            name: 'MongoDB',
            confidence: 80
        }
    ];

    const [selectedPage, setSelectedPage] = useState(1);

    const totalPages = Math.ceil(skillList.length/numberOfSkillsPerPage);
    const pages = [];
    const handlePageClick = function (num) {
        setSelectedPage(prev => num);
    }

    for(let i = 0; i < totalPages; i++) {
        pages.push(<div onClick={() => handlePageClick(i+1)} key={i+1} className="skill-page" style={ selectedPage === i+1 ? {color: 'gray'} : {color: 'white'} }><p>{i+1}</p></div>);
    }

    const skillArray = [];

    for(let i=0; i < skillList.length; i++) {
        skillArray.push(<Skill {...skillList[i]} key={i+1} ></Skill>)
    }

    const filteredSkillArray = skillArray.filter((page, idx) => 
        selectedPage === (Math.floor(idx/6) + 1)
    );

    return(
        <section>
            <div className="progression-div">
                <h3>My Timeline</h3>
                {/*<div class="moving-line">....</div>*/}
                <div className="timeline-line">
                </div>
                <div className="separator-line">   
                </div>
            </div>
            <div className="experience-div">
                <h3 className="skill-h3">My Skills</h3>
                <div className="new-skill-pages">
                    <div className="new-skill-picture">
                        <div className="new-skill-picture-displayed">
                        </div>
                    </div>
                    <div className="new-skill-skills">
                        <div className="skill-grid">
                            {filteredSkillArray}
                        </div>
                        <div className="skill-pagination">
                            {pages}
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-div">
                <h3>My Projects</h3>
                <div className="project-overview">
                    <div className="project-desc">
                        <p>Here are the projects I've worked on over the years, along the ones still in 
                            progress. Hoping to incorporate advanced machine learning models into more 
                            projects and build cooler things!</p>
                        <h1>........</h1>
                    </div>
                    <div className="projects">
                        <Project name="Attractions" status="Completed" image="" description="Simple Review CRUD Application to review favorite attractions" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="In Progress" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="Not Yet Started" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="Completed" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                    </div>
                </div>
            </div>
        </section>
    );
}