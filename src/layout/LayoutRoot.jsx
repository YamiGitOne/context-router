import {Outlet} from "react-router-dom";

const LayoutRoot = () =>{
    return <>
    <Outlet />

    <p>Footer</p>
    </>;
}

export default LayoutRoot;