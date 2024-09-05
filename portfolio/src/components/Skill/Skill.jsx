import { useState } from 'react';
import './Skill.css';

export default function Skill({name, confidence}) {

    console.log(`name is: ${name}`);
    console.log(`confidence is: ${confidence}`);

    return(
        <div className="new-skill-container">
            <div className="new-skill-top">
                <h4>{name}</h4>
                <div className="percentage-displayer">
                    <p>{confidence}%</p>
                    <div className="percentage-displayer-triangle">   
                    </div>
                </div>
            </div>
            <div className="skill-bar">
                <div className="skill-bar-fill-amount" style={{
                    backgroundColor: 'black',
                    borderRadius: '10px',
                    height: "80%",
                    width: `${confidence}%`,
                }}>
                    <div className="skill-bar-fill-animation">
                    </div>
                </div>
            </div>
        </div>
    );
}
