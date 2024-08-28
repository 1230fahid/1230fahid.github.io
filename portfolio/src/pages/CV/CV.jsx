import { useLocation } from "react-router-dom";

export default function CV() {
    let location = useLocation();
    let { hash, pathname, search, state } = location;
    let link = "https://drive.google.com/uc?export=view&id=1BxYggcOHRllNZQ8F8zyJR7p5Bu5KloNA"
    console.log(`hash is ${hash}`);
    console.log(`pathname is ${pathname}`);
    console.log(`search is ${search}`);
    console.log(`state is ${state}`);

    return(
        <>
            <embed src={link} type="application/pdf" width="100%" height="600px"/>
        </>
    );
}

