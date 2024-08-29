import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return( 
        <div className="nav-container">
            <div className="logo">
                <p>FA</p>
            </div>
            <nav>
                <Link className="link-style" to="/">Home</Link>
                <Link className="link-style" to="/experience">Experience</Link>
                <Link className="link-style" to="/curriculum-vitae">CV</Link>
                <Link className="link-style" to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

