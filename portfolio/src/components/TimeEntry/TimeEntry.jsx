import "./TimeEntry.css";

export default function TimeEntry({className, imageAddress, startDate, description}) {
    console.log("imageAddress is: " + imageAddress);
    return(
        <div className={"time-container " + className}>
            <div className="time-circle" style={{
                backgroundImage: `url("${imageAddress}")`,
                backgroundSize: 'cover',
            }}></div>
            <div className="time-line"></div>
        </div>
    );
}