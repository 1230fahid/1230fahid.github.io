import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [textArea, setTextArea] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    const handleTextAreaChange = (e) => {
        setTextArea(prevValue => e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(prevValue => e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(prevValue => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the mailto link
        const mailtoLink = `mailto:1230fahid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textArea)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

        // Open the mailto link
        window.location.href = mailtoLink;

    }

    return (
        <div id="contact" className="contact-container">
            <div className="contact-comp">
                <h3 className="contact-me">Contact Me!</h3>
                <form className="form-contact" onSubmit={handleSubmit}>
                    <div className="names">
                        <div className="name">
                            <label for="first-name">Name: </label>
                            <input type="text" id="first-name" placeholder="e.g. John"/>
                        </div>
                        <div className="name">
                            <label for="last-name">Last Name: </label>
                            <input type="text" id="last-name" placeholder="e.g. Smith"/>
                        </div>
                    </div>
                    <div className="email-container">
                        <div className="email">
                            <label for="emailAddress">Email:</label>
                            <input type="email" id="emailAddress" placeholder="e.g. abc123@mail.com" required value={email} onChange={handleEmailChange}></input>
                        </div>
                    </div>
                    <div className="subject-container">
                        <div className="subject-div">
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" value={subject} onChange={handleSubjectChange} placeholder="e.g. Greetings Fahid!" required style={subject.length > 20 ? 
                            { 
                                color: 'red',
                                backgroundColor: '#FFD1CF',
                                border: '2px solid red' 
                            } : {}}></input>
                            <small style={subject.length > 20 ? 
                            { 
                                color: 'red',
                                visibility: 'visible' 
                            } : {
                                visibility: 'hidden'
                            }}>Subject must be 20 characters or less!</small>
                        </div>
                    </div>
                    <div className="text-container">
                        <div className="text-area">
                            <label for="area">Message:</label>
                            <textarea id="area" placeholder="e.g. Message" value={textArea} onChange={handleTextAreaChange} required style={textArea.length > 150 ? 
                            { 
                                color: 'red',
                                backgroundColor: '#FFD1CF',
                                border: '2px solid red' 
                            } : {}}></textarea>
                            <small style={ textArea.length > 150 ? 
                            { 
                                color: 'red',
                                visibility: 'visible' 
                            } : {
                                visibility: 'hidden'
                            }}
                            >Message must be 150 characters or less!</small>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="bttn" disabled={textArea.length > 150 || subject.length > 20} style={textArea.length > 150 || subject.length > 20 ? 
                            { 
                                opacity: 0.5, 
                                cursor: 'default', 
                                backgroundColor: 'black', 
                                color: 'white', 
                                borderColor: 'white'  
                            } : {}}>Submit</button>
                    </div>
                </form>
            </div>
            {/*
            <div className="other-contact">
                <div className="other-contact-div">
                    <p>Can also contact me using the platforms below</p>
                    <a href="mailto:1230fahid@gmail.com" className="other-contact-link" style={{
                            color: 'white',
                    }}>
                        <div className="other-contact-link-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                        </div>
                        <p className="other-contact-link-p">1230fahid@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/fahid-abdullah-223451176/" className="other-contact-link">
                        <div className="other-contact-link-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </div>
                        <p className="other-contact-link-p">Fahid Abdullah</p>
                    </a>
                </div>
            </div>
            */}
        </div>
    );
}
