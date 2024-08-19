import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
                
            </div>

        </div>

    );
};

export default Root;