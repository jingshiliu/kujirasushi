import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.jsx";

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;