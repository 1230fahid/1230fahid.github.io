import "./Experience.css";
import Skill from "../../components/Skill/Skill.jsx";
import Project from "../../components/Project/Project.jsx";
import TimeEntry from "../../components/TimeEntry/TimeEntry.jsx";
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

    const projectList = [
        {
            name: "Attractions",
            status: "Completed",
            image: "",
            description: "Simple Review CRUD Application to review favorite attractions",
            link: "https://www.google.com/"
        },
        {
            name: "Attractions",
            status: "In Progress",
            image: "",
            description: "This is a sample description",
            link: "https://www.google.com/"
        },
        {
            name: "Attractions",
            status: "Not Yet Started",
            image: "",
            description: "This is a sample description",
            link: "https://www.google.com/"
        },
        {
            name: "Attractions",
            status: "Completed", 
            image: "",
            description: "This is a sample description",
            link: "https://www.google.com/"
        }
    ];

    const experienceList = [
        {
            imageAddress: "../../assets/images/drexel_logo.png",
            startDate: "09/2019",
            description: "Attended Drexel University from September 2019 to June 2024.",
        },
        {
            imageAddress: "",
            startDate: "",
            description: "",
        },
        {
            imageAddress: "",
            startDate: "",
            description: "",
        },
        {
            imageAddress: "",
            startDate: "",
            description: "",
        }
    ]

    const [selectedPage, setSelectedPage] = useState(1);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const totalPages = Math.ceil(skillList.length/numberOfSkillsPerPage);
    const pages = [];
    
    const expDelay = async function(time) {
        setTimeout(function () {

        }, time);
    }
    
    const handlePageClick = async function (num) {
        await expDelay(750);
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

    const handleNextProject = () => {
        setSelectedProjectIndex(prevSelectedProjectIndex => (prevSelectedProjectIndex + 1) % projectList.length );
    }

    const handlePrevProject = () => {
        setSelectedProjectIndex(prevSelectedProjectIndex => (prevSelectedProjectIndex - 1) == -1 ? projectList.length - 1 : prevSelectedProjectIndex - 1);
    }

    return(
        <section className="experience-section">
            <div id="skills" className="experience-div">
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
            <div id="projects" className="projects-div">
                <h3>My Projects</h3>
                <div className="projects-overview">
                    <div className="projects-desc">
                        <p>Here are the projects I've worked on over the years, along the ones still in 
                            progress. Hoping to incorporate advanced machine learning models into more 
                            projects and build cooler things!</p>
                    </div>
                    <div className="projects-container">
                        <p onClick={handlePrevProject}>{'<'}</p>
                        <div className="projects">
                            <Project className={selectedProjectIndex === 0 ? `display active` : (selectedProjectIndex === 1 ? `display active previous` : ( selectedProjectIndex === 3 ? "display active next" : "display") )} name="Attractions" status="Completed" image="" description="Simple Review CRUD Application to review favorite attractions" link="https://www.google.com/"></Project>
                            <Project className={selectedProjectIndex === 1 ? `display active` : (selectedProjectIndex === 2 ? `display active previous` : ( selectedProjectIndex === 0 ? "display active next" : "display") )} name="Attractions" status="In Progress" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                            <Project className={selectedProjectIndex === 2 ? `display active` : (selectedProjectIndex === 3 ? `display active previous` : ( selectedProjectIndex === 1 ? "display active next" : "display") )} name="Attractions" status="Not Yet Started" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                            <Project className={selectedProjectIndex === 3 ? `display active` : (selectedProjectIndex === 0 ? `display active previous` : ( selectedProjectIndex === 2 ? "display active next" : "display") )} name="Attractions" status="Completed" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        </div>
                        <p onClick={handleNextProject}>{'>'}</p>
                    </div>    
                </div>
            </div>
        </section>
    );
}