import "./Experience.css";
import Skill from "../../components/Skill/Skill.jsx";
import Project from "../../components/Project/Project.jsx";

export default function Experience() {
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
        }
    ]
    
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
                <div className="skill-pages">
                    <p id="less-than" className="sign">&lt;</p>
                    <div className="skill-container">
                        <Skill name="Python" confidence={90}></Skill>
                        <Skill name="C#" confidence={90}></Skill>
                        <Skill name="React" confidence={70}></Skill>
                    </div>
                    <div className="skill-container">
                        <Skill name="Python" confidence={90}></Skill>
                        <Skill name="C#" confidence={90}></Skill>
                        <Skill name="React" confidence={70}></Skill>
                    </div>
                    <p id="greater-than" className="sign">&gt;</p>
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
                        <Project name="Attractions" status="Completed" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="In Progress" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="Not Yet Started" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                        <Project name="Attractions" status="Completed" image="" description="This is a sample description" link="https://www.google.com/"></Project>
                    </div>
                </div>
            </div>
        </section>
    );
}