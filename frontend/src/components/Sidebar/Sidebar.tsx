import React, { useState } from 'react';
import { SidebarData } from "../../Data/Data";
import muscle from '../../img/muscle.png';

import { VscSignIn } from "react-icons/vsc";

import './style.css';

const Sidebar = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={muscle} alt="" />
                <span>
                    T10 SPORT
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => (
                    <div
                        className={selected === index ? "menuItem active" : "menuItem"}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <item.icon />
                        <span>{item.heading}</span>
                    </div>
                ))}
                {/* signoutIcon */}
                <div className="menuItem">
                    <VscSignIn />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
