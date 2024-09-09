import "./Project.css";


export default function({name, status, image, description, siteLink, sourceLink, className, number}) {
    let statusColors = {
        "Completed": "green",
        "In Progress": "orange",
        "Not Yet Started": "white",
        "Paused": "black",
        "Broken": "red",
    };

    return(
        <div className={`project-container ${className}`}>
            <div className={`project-image ${number}`}></div>
            <div className="project-description-container">
                <div className="project-description">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h4 style={{
                        color: statusColors[status]
                    }}>{status}</h4>
                    <div className="link-container">
                        <a href={siteLink} className="site" style={!siteLink ? {
                            display: 'none',
                        }: {}}>
                            <p>Site</p>
                        </a>
                        <a href={sourceLink} className="code" style={!sourceLink ? {
                            display: 'none',
                        }: {}}>
                            <p>Code</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


