import { images } from '../../assets/images';

export default function About() {
    return (
        <section id="about" className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6">About Me</h3>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/3 w-full flex items-center justify-center">
                        <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg">
                            {images.profile ? (
                                <img 
                                    src={images.profile} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 flex items-center justify-center">
                                    <span className="text-6xl font-bold text-white">FA</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <p className="prose dark:prose-invert max-w-none">
                            My journey began when I started to attend <span className="text-yellow-800 dark:text-yellow-300">Drexel</span> <span className="text-blue-400 dark:text-blue-300">University</span> as an undergrad
                            back in September, 2019.
                            <br /><br />
                            There I switched majors multiple times from Electrical
                            Engineering to Computer Engineering to Computer Science. During my time there, I
                            developed many technical and soft skills, made amazing connections, and gained
                            professional experience, which have all shaped me into the man I am today.
                            <br /><br />
                            Currently I am still deciding what it is I still want to do in the future. On one end,
                            I would like to pursue a Master's degree in order to become a data scientist. However,
                            I enjoy full-stack development quite a bit and seek to keep working in this field for
                            the next few years.
                            <br /><br />
                            In my free time, I love to go to the gym and stay in shape by lifting weights and running a bit.
                            <br /><br />
                            I've also been invested into books and I plan to read Don Quixote and the Epic of Gilgamesh next.
                            <br /><br />
                            I also want to learn how to bake to make tasty deserts that are low-calorie and filling.
                            <br /><br />
                            Also a HUGE fan of anime! Especially classic 80's and 90's ones!
                            <br /><br />
                            Overall, I'm really glad to be a part of the realm of Computer Science and am
                            thankful for all of the people I've met and am just looking forward to do fun
                            things tomorrow!
                            <br /><br />
                            Feel free to contact me at the bottom of this page if you need anything!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

