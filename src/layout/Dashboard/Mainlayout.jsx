import React from "react";
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom'

function Mainlayout() {
    return (
        <div className="bg-light" style={{height:'100vh'}}>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
};

export default Mainlayout;
