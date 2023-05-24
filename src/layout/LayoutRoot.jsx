import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () =>{
    return <>

    <Navbar />
    <hr></hr>
    <Outlet />

    <hr></hr>
    <p>Footer</p>
    </>;
}

export default LayoutRoot;