import "./Experience.css";
import Skill from "../../components/Skill/Skill.jsx";
import Project from "../../components/Project/Project.jsx";
import TimeEntry from "../../components/TimeEntry/TimeEntry.jsx";
import "../../components/Project/Project.css";
import { useState, useEffect } from 'react';


export default function Experience() {
    
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        numberOfSkillsPerPage: 6
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions(({ width, height, numberOfSkillsPerPage }) => {
                let newNumberOfSkillsPerPage = window.innerWidth < 395 ? 3 : 6;
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    numberOfSkillsPerPage: newNumberOfSkillsPerPage,
                };
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

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
            status: "Broken",
            image: "",
            description: "A robust CRUD application that enables users to create and manage a personalized list of favorite world-renowned attractions, while also allowing them to share detailed reviews and insights about each destination, fostering a community of curious travelers and explorers",
            siteLink: "https://www.google.com/",
            sourceLink: "",
        },
        {
            name: "Game Exchange",
            status: "Completed",
            image: "../../assets/images/game_exchange.jpg",
            description: "A dynamic e-commerce platform designed to offer users a seamless experience in browsing, selecting, and purchasing a curated collection of classic video games, complete with detailed product descriptions, user reviews, and secure checkout options",
            siteLink: "https://www.google.com/",
            sourceLink: "",
        },
        {
            name: "Market Eye",
            status: "In Progress",
            image: "",
            description: "A .NET full-stack application that allows users to view stocks from multiple indices and uses built-in Deep Learning models for accurate stock price forecasting and personalized investment recommendations",
            siteLink: "https://www.google.com/",
            sourceLink: "",
        },
        {
            name: "AlgoExecutor",
            status: "In Progress", 
            image: "",
            description: "An Angular-based front-end application that enables users to visually explore and interact with popular Data Structures and Algorithms",
            siteLink: "https://www.google.com/",
            sourceLink: "",
        }
    ];     

    const [selectedPage, setSelectedPage] = useState(1);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const totalPages = Math.ceil(skillList.length/dimensions.numberOfSkillsPerPage);
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
        selectedPage === (Math.floor(idx/dimensions.numberOfSkillsPerPage) + 1)
    );

    const handleNextProject = () => {
        setSelectedProjectIndex(prevSelectedProjectIndex => (prevSelectedProjectIndex + 1) % projectList.length );
    }

    const handlePrevProject = () => {
        setSelectedProjectIndex(prevSelectedProjectIndex => (prevSelectedProjectIndex - 1) == -1 ? projectList.length - 1 : prevSelectedProjectIndex - 1);
    }

    let statusColors = {
        "Completed": "green",
        "In Progress": "orange",
        "Not Yet Started": "white",
        "Paused": "black",
        "Broken": "red",
    };

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
                            <Project number="zero" className={selectedProjectIndex === 0 ? `display active` : (selectedProjectIndex === 1 ? `display active previous` : ( selectedProjectIndex === 3 ? "display active next" : "display") )} {...projectList[0]}></Project>
                            <Project number="one" className={selectedProjectIndex === 1 ? `display active` : (selectedProjectIndex === 2 ? `display active previous` : ( selectedProjectIndex === 0 ? "display active next" : "display") )} {...projectList[1]}></Project>
                            <Project number="two" className={selectedProjectIndex === 2 ? `display active` : (selectedProjectIndex === 3 ? `display active previous` : ( selectedProjectIndex === 1 ? "display active next" : "display") )} {...projectList[2]}></Project>
                            <Project number="three" className={selectedProjectIndex === 3 ? `display active` : (selectedProjectIndex === 0 ? `display active previous` : ( selectedProjectIndex === 2 ? "display active next" : "display") )} {...projectList[3]}></Project>
                        </div>
                        <p onClick={handleNextProject}>{'>'}</p>
                    </div>    
                </div>
            </div>
        </section>
    );
}