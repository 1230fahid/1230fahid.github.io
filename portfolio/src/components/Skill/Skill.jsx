import { useState } from 'react';
import './Skill.css';

export default function Skill({name, confidence}) {

    return(
        <div className="container">
            <div className="container-header">
                <p>{name}</p>
                <p>{confidence}%</p>
            </div>
            <div className="container-footer">
                <div className="container-bar">
                    <div style={{
                        backgroundColor: "black",
                        width: String(confidence) + "%",
                        height: "100%",
                        'border-radius': "10px",
                        transition: 'background-color 1s ease-out',
                    }}></div>
                </div>
            </div>
        </div>
    )
}
