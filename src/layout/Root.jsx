import { Outlet } from "react-router-dom";
import NavBar from "../pages/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;