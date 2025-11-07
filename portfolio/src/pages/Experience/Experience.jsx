import Skill from "../../components/Skill/Skill.jsx";
import Project from "../../components/Project/Project.jsx";
import TimeEntry from "../../components/TimeEntry/TimeEntry.jsx";
import { useState, useEffect } from 'react';
import { images } from '../../assets/images';

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

    const skillList = [
        { name: 'Python', confidence: 90 },
        { name: 'C#', confidence: 90 },
        { name: 'Java', confidence: 85 },
        { name: 'HTML', confidence: 85 },
        { name: 'CSS', confidence: 80 },
        { name: 'JavaScript', confidence: 90 },
        { name: 'TypeScript', confidence: 80 },
        { name: 'React', confidence: 80 },
        { name: 'Angular', confidence: 80 },
        { name: 'Git', confidence: 90 },
        { name: 'SQL Server', confidence: 85 },
        { name: 'Unix', confidence: 80 },
        { name: 'NodeJS', confidence: 85 },
        { name: 'NextJS', confidence: 70 },
        { name: '.NET', confidence: 85 },
        { name: 'MongoDB', confidence: 80 }
    ];

    const projectList = [
        {
            name: "Attractions",
            status: "Broken",
            image: images.under_construction_2,
            description: "A robust CRUD application that enables users to create and manage a personalized list of favorite world-renowned attractions, while also allowing them to share detailed reviews and insights about each destination, fostering a community of curious travelers and explorers.",
            siteLink: "",
            sourceLink: "https://github.com/1230fahid/attractions",
        },
        {
            name: "Game Exchange",
            status: "Completed",
            image: images.game_exchange,
            description: "A dynamic e-commerce platform designed to offer users a seamless experience in browsing, selecting, and purchasing a curated collection of classic video games, complete with detailed product descriptions, user reviews, and secure checkout options.",
            siteLink: "https://gameexchange.azurewebsites.net/",
            sourceLink: "https://github.com/1230fahid/GameExchange",
        },
        {
            name: "Market Eye",
            status: "In Progress",
            image: images.market_eye_home,
            description: "A .NET full-stack application that allows users to view stocks from multiple indices and uses built-in Deep Learning models for accurate stock price forecasting and personalized investment recommendations.",
            siteLink: "",
            sourceLink: "https://github.com/1230fahid/Market-Eye",
        },
        {
            name: "AlgoExecutor",
            status: "In Progress", 
            image: images.algo_executor_home,
            description: "An Angular-based front-end application that enables users to visually explore and interact with popular Data Structures and Algorithms.",
            siteLink: "",
            sourceLink: "https://github.com/1230fahid/algo-executor",
        }
    ];     

    const [selectedPage, setSelectedPage] = useState(1);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const totalPages = Math.ceil(skillList.length/dimensions.numberOfSkillsPerPage);
    const pages = [];
    
    const expDelay = async function(time) {
        setTimeout(function () {}, time);
    }
    
    const handlePageClick = async function (num) {
        await expDelay(750);
        setSelectedPage(prev => num);
    }

    for(let i = 0; i < totalPages; i++) {
        pages.push(
            <button 
                onClick={() => handlePageClick(i+1)} 
                key={i+1} 
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                    ${selectedPage === i+1 
                        ? 'text-gray-400 dark:text-gray-500' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
                <span>{i+1}</span>
            </button>
        );
    }

    const skillArray = skillList.map((skill, i) => (
        <Skill {...skill} key={i+1} />
    ));

    const filteredSkillArray = skillArray.filter((page, idx) => 
        selectedPage === (Math.floor(idx/dimensions.numberOfSkillsPerPage) + 1)
    );

    const handleNextProject = () => {
        setSelectedProjectIndex(prevIndex => (prevIndex + 1) % projectList.length);
    }

    const handlePrevProject = () => {
        setSelectedProjectIndex(prevIndex => (prevIndex - 1 + projectList.length) % projectList.length);
    }

    const getProjectClassName = (index) => {
        const isActive = selectedProjectIndex === index;
        const isPrevious = (selectedProjectIndex === (index + 1) % projectList.length);
        const isNext = (selectedProjectIndex === (index - 1 + projectList.length) % projectList.length);
        
        return `transform transition-transform duration-500
            ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
            ${isPrevious ? '-translate-x-full' : ''}
            ${isNext ? 'translate-x-full' : ''}`;
    };

    return(
        <section className="min-h-screen bg-white dark:bg-gray-900 py-16">
            <div id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    My Skills
                </h3>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredSkillArray}
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        {totalPages > 1 && pages}
                    </div>
                </div>
            </div>

            <div id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    My Projects
                </h3>
                <div className="space-y-12">
                    <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are the projects I've worked on over the years, along with the ones still in 
                        progress. Hoping to incorporate advanced machine learning models into more 
                        projects and build cooler things!
                    </p>
                    
                    <div className="relative px-12">
                        <button 
                            onClick={handlePrevProject}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center
                                text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                bg-white dark:bg-gray-800 rounded-full shadow-lg
                                transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="relative overflow-hidden min-h-[400px]">
                            {projectList.map((project, index) => (
                                <div 
                                    key={index} 
                                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                        selectedProjectIndex === index
                                            ? 'opacity-100 translate-x-0 pointer-events-auto'
                                            : selectedProjectIndex > index
                                                ? 'opacity-0 -translate-x-full pointer-events-none'
                                                : 'opacity-0 translate-x-full pointer-events-none'
                                    }`}
                                >
                                    <Project {...project} />
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={handleNextProject}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center
                                text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                bg-white dark:bg-gray-800 rounded-full shadow-lg
                                transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
                            {projectList.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProjectIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        selectedProjectIndex === index
                                            ? 'bg-blue-600 dark:bg-blue-400'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}