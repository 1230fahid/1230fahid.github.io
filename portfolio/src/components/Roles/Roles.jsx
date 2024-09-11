import React, { useState, useEffect } from 'react';
import './Roles.css';

function App() {
  const roles = ['Developer', 'Researcher', 'Student'];
  const alternateRoles = ['Gym Enthusiast', 'Reader', 'Anime Lover'];
  
  const [currentRoles, setCurrentRoles] = useState(roles);
   
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentRoles(prevRoles => ((prevRoles[0] === roles[0]) && 
        (prevRoles[1] === roles[1]) && (prevRoles[2] === roles[2])) ? 
        alternateRoles : roles);
    }, 3500);
    
    return () => clearTimeout(timeoutId);
  });
  

  return (
    <div className="interests">
      <p>Hi! I'm Fahid, a</p>
      <br />
      <div className="roles-container">
        <div className="pre-roles">
        </div>
        <div className="roles">
          <p className={'role active dev'}>{currentRoles[0]}</p>
          <p className={'role active res'}>{currentRoles[1]}</p>
          <p className={'role active std'}>{currentRoles[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
