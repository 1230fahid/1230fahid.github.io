import "./Project.css";


export default function({name, status, image, description, link}) {
    let statusColors = {
        "Completed": "green",
        "In Progress": "orange",
        "Not Yet Started": "black",
        "Paused": "red"
    };

    return(
        <div className="project-container">
            <div className="project-description">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="project-image">
                <h4 style = {{
                    color: statusColors[status]
                }}>{status}</h4>
                <div className="image"></div>
            </div>

            {/*
            <div className="project-image"></div>
            <div className="project-content">
                <h2>{name}</h2>
                <p>{description}</p>
                <p style = {{
                    color: statusColors[status],
                    fontWeight: 'bold'
                }}
                >{status}</p>
                <a href={link}>View</a>
            </div>
            */}
        </div>
    );
}


