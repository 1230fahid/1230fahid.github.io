import React, { useState, useEffect } from 'react';

const roleStyles = {
  dev: 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400',
  res: 'text-red-600 dark:text-red-400 border-red-600 dark:border-red-400',
  std: 'text-green-600 dark:text-green-400 border-green-600 dark:border-green-400'
};

const roleClasses = 'opacity-0 h-12 overflow-hidden whitespace-nowrap border-r-2 animate-typing';

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
    <div className="h-3/5 flex flex-col items-center">
      <p className="h-1/5 m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center dark:text-white">
        Hi! I'm Fahid, a
      </p>
      <br />
      <div className="flex h-4/5 w-full">
        <div className="w-1/3 lg:w-1/4" />
        <div className="relative h-full flex-1 flex flex-col justify-around">
          {['dev', 'res', 'std'].map((style, index) => (
            <p key={style} className={`${roleClasses} ${roleStyles[style]} opacity-100 text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
              {currentRoles[index]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
