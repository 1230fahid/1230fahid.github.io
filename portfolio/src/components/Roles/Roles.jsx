import React, { useState, useEffect } from 'react';
import './Roles.css';

function App() {
  const roles = ['Developer', 'Researcher', 'Student'];
  const alternateRoles = ['Gym Enthusiast', 'Reader', 'Anime Lover'];
  
  const [currentRoles, setCurrentRoles] = useState(roles);
  const [index, setIndex] = useState(-1);

  const delay = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            setIndex(function(prevIndex) {
                let newIndex = prevIndex + 1;
                console.log("index is " + newIndex + " time is " + time);
                return newIndex;
            });
            resolve();
        }, time)
    })
  }

  useEffect(() => {

    const initialDelay = async() => {
        for(let j = 0; j < 3; j++) {
            //await delay(500);
        }
    }

    initialDelay();
  }, []);

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("index is: " + index);
      console.log("currentRoles is " + currentRoles);
      setCurrentRoles(prevRoles => (prevRoles[0] === roles[0] && prevRoles[1] === roles[1] && prevRoles[2] === roles[2]) ? alternateRoles : roles);
      setIndex(prevIndex => {
        let newIndex = prevIndex + 1;
        console.log("newIndex is: " + newIndex);
        return newIndex;
      });
    }, 3500);
    
    return () => clearTimeout(timeoutId);
  }, [index]);
  

  return (
    <div className="interests">
      <p>Hi! I'm Fahid, a</p>
      <br />
      <div className="roles-container">
        <div className="pre-roles">

        </div>
        <div className="roles">
          <p className={index >= -1 ? 'role active dev' : 'role'}>{currentRoles[0]}</p>
          <p className={index >= -1 ? 'role active res' : 'role'}>{currentRoles[1]}</p>
          <p className={index >= -1 ? 'role active std' : 'role'}>{currentRoles[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
