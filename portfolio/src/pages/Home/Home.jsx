
import { Link } from "react-router-dom";
import "./Home.css";
import Roles from "../../components/Roles/Roles.jsx";

export default function Home() {
    return(
        <div id="home" className="home-container">
            <div className="about-me">
                <div className="about">
                    <Roles></Roles>
                    <div className="summary">
                        <p>
                            I'm a 23 year old curious individual, who's curious about anything involving 
                            algorithms and coding, with a focus on Software Development and Machine Learning! 
                            Not sure where life will take me, but right now I'm glad you're visiting my site!
                        </p>
                        <br/>
                        <h4>Check out my:</h4>
                        <div>
                            <a href="#skills" className="summary-block">
                                <p>Skills</p>
                            </a>
                            <a href="#projects" className="summary-block">
                                <p>Projects</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1BxYggcOHRllNZQ8F8zyJR7p5Bu5KloNA/view?usp=sharing" className="summary-block" target="_blank">
                                <p>Resume</p>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <div className="picture"></div>
                </div>    
            </div> 
            <div>
            </div>
        </div>
    );
}

