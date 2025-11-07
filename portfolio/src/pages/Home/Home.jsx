
import { Link } from "react-router-dom";
import Roles from "../../components/Roles/Roles.jsx";
import pic from "../../assets/images/fahid_pic.png";

export default function Home() {
    return(
        <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="lg:w-1/2 w-full">
                        <Roles />

                        <div className="mt-6">
                            <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed text-center lg:text-left">
                                I'm a 24 year old curious individual, who's curious about anything involving
                                algorithms and coding, with a focus on Performance, Machine Learning,
                                Reinforcement Learning and Networking!
                            </p>

                            <h4 className="mt-6 text-center lg:text-left text-lg lg:text-xl font-light">Check out my:</h4>

                            <div className="mt-4 flex flex-row justify-center lg:justify-start gap-4">
                                <a href="#skills" className="px-4 py-2 rounded-md border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 dark:border-blue-400 dark:text-blue-300 transition">Skills</a>
                                <a href="#projects" className="px-4 py-2 rounded-md border-2 border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 dark:border-red-400 dark:text-red-300 transition">Projects</a>
                                <a href="https://drive.google.com/file/d/1BxYggcOHRllNZQ8F8zyJR7p5Bu5KloNA/view?usp=sharing" className="px-4 py-2 rounded-md border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900 dark:border-green-400 dark:text-green-300 transition" target="_blank" rel="noreferrer">Resume</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                            <img src={pic} alt="profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

