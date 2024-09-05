import "./Project.css";


export default function({name, status, image, description, link, className}) {
    let statusColors = {
        "Completed": "green",
        "In Progress": "orange",
        "Not Yet Started": "black",
        "Paused": "red"
    };

    return(
        <div className={`project-container ${className}`}>
            <div className="project-image"></div>
            <div className="project-description-container">
                <div className="project-description" style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                }}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h4 style={{
                        color: statusColors[status]
                    }}>{status}</h4>
                </div>
            </div>
        </div>
    );
}


