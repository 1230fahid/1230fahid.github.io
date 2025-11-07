import { useState } from "react";

export default function Contact() {
    const [textArea, setTextArea] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    const handleTextAreaChange = (e) => {
        setTextArea(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:1230fahid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textArea)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
    }

    const subjectTooLong = subject.length > 20;
    const textTooLong = textArea.length > 150;
    const submitDisabled = subjectTooLong || textTooLong;

    return (
        <section id="contact" className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-2xl mx-auto px-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Me!</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium mb-1">Name</label>
                            <input id="first-name" type="text" placeholder="e.g. John" 
                                className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name</label>
                            <input id="last-name" type="text" placeholder="e.g. Smith" 
                                className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="emailAddress" className="block text-sm font-medium mb-1">Email</label>
                        <input id="emailAddress" type="email" placeholder="e.g. abc123@mail.com" required value={email} onChange={handleEmailChange} 
                            className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={handleSubjectChange}
                            placeholder="e.g. Greetings Fahid!"
                            required
                            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 ${
                                subjectTooLong 
                                    ? 'border-red-600 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300' 
                                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
                            }`}
                        />
                        <p className={`text-sm mt-1 ${subjectTooLong ? 'text-red-600 dark:text-red-400 visible' : 'invisible'}`}>
                            Subject must be 20 characters or less!
                        </p>
                    </div>

                    <div>
                        <label htmlFor="area" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="area"
                            placeholder="e.g. Message"
                            value={textArea}
                            onChange={handleTextAreaChange}
                            required
                            rows={6}
                            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 ${
                                textTooLong 
                                    ? 'border-red-600 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300' 
                                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800'
                            }`}
                        ></textarea>
                        <p className={`text-sm mt-1 ${textTooLong ? 'text-red-600 dark:text-red-400 visible' : 'invisible'}`}>
                            Message must be 150 characters or less!
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={submitDisabled}
                            className={`w-full px-4 py-2 rounded-md text-white transition-colors ${
                                submitDisabled 
                                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-70' 
                                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                            }`}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
