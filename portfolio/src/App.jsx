import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Logo from "./components/Logo/Logo.jsx";
import { useState, useEffect } from "react";

function App() {

  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        setDark(stored === 'dark');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDark(true);
      }
    } catch (e) {
    }
  }, []);

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
    }
  }, [dark]);

  const handleThemeToggle = () => setDark(d => !d);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header className="w-full bg-white shadow-md dark:bg-gray-900 dark:shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="block">
              <Logo />
            </a>

            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-8">
                <li><a className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium" href="#home">Home</a></li>
                <li><a className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium" href="#about">About</a></li>
                <li><a className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium" href="#skills">Skills</a></li>
                <li><a className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium" href="#projects">Projects</a></li>
                <li><a className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium" href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={handleThemeToggle} aria-label="Toggle theme" className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                {dark ? (
                  // Sun icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM14.95 14.95a1 1 0 01-1.32.083l-.094-.083-.7-.7a1 1 0 011.42-1.42l.7.7c.39.39.39 1.02 0 1.42zM6.05 14.95a1 1 0 00-1.32.083l-.094.083a1 1 0 001.42 1.42l.094-.083.7-.7a1 1 0 00-1.42-1.42l-.5.5zM10 6a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  // Moon icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <div className="sm:hidden">
                <button onClick={handleToggle} aria-label="Toggle menu" className="flex flex-col h-8 w-8 justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transform transition duration-300 ${toggle ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 mt-1 transition-opacity duration-300 ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-6 bg-gray-800 dark:bg-gray-200 mt-1 transform transition duration-300 ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
              </div>
            </div>
          </div>

          <div className={`sm:hidden ${toggle ? 'block' : 'hidden'} border-t border-gray-100 dark:border-gray-800`}>
            <div className="px-6 py-4 bg-white dark:bg-gray-900">
              <ul className="flex flex-col space-y-4">
                <li><a className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium" href="#home">Home</a></li>
                <li><a className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium" href="#about">About</a></li>
                <li><a className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium" href="#skills">Skills</a></li>
                <li><a className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium" href="#projects">Projects</a></li>
                <li><a className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <Home />
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );

}

export default App;
