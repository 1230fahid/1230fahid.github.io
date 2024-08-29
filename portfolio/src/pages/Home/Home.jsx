
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return(
        <div className="home-container">
            <div className="about-me">
                <div className="about">
                    <div className="interests">
                        <p>Hi! I'm Fahid, a</p>
                        <br></br>
                        <p>&nbsp; Developer,</p>
                        <p>&nbsp; Researcher,</p>
                        <p>&nbsp; Student</p>
                    </div>
                    <div className="summary">
                        <p>
                            Hello! My name is Fahid Abdullah! I'm a 23 year old curious individual, who's curious 
                            about anything involving algorithms and coding, with a focus on Software Development and Machine Learning! 
                            Not sure where life will take me, but right now I'm glad you're visiting my site!
                        </p>
                        <h4>Check out my:</h4>
                        <div>
                            <Link to="/experience" className="summary-block">
                                <p>Projects</p>
                            </Link>
                            <Link to="/experience" className="summary-block">
                                <p>Skills</p>
                            </Link>
                            {/*<a className="summary-block" href="../../assets/files/resume.pdf" target="_blank">Resume</a>*/}
                            {
                                <Link to="/experience" className="summary-block">
                                    <p>Resume</p>
                                </Link>
                            }
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

