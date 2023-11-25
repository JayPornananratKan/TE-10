import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainDash from "../../components/MainDashboard/MainDasboard";

function RegisterMember() {
    return(
        <div className="register">
            <div className="App">
                <div className="AppGlass">
                    <Sidebar></Sidebar>
                    <MainDash/>
                </div>
                
            </div>
        </div>
    );
}
export default RegisterMember;