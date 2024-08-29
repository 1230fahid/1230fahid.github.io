import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation.jsx";

export default function Root() {
    return (
        <>
            <Navigation></Navigation>
            <Outlet/>
        </>
    );
}

