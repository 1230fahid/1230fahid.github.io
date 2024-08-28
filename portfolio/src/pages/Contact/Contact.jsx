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
        <div className="contact-comp">
            <h3 className="contact-me">Contact Me!</h3>
            <form className="form-contact" onSubmit={handleSubmit}>
                <div className="names">
                    <div className="name">
                        <label for="first-name">First Name: </label>
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
    );
}
