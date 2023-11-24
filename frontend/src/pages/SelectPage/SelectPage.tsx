import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { BsList, BsBoxArrowInRight } from "react-icons/bs";
import muscle from '../../img/muscle.png';
import loginadmin from '../../img/loginadmin.jpg';

function SelectPage() {
    const [itemActive, setItemActive] = useState(0);
    const [items, setItems] = useState<NodeListOf<HTMLDivElement> | null>(null);

useEffect(() => {
    const itemsList = document.querySelectorAll('.slider .list .item') as NodeListOf<HTMLDivElement>;
    setItems(itemsList);
}, []);

const showSlider = (index: number) => {
    setItemActive(index);
};

const handleNextClick = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
};

const handlePrevClick = () => {
    setItemActive((prevItemActive) =>
    prevItemActive === 0 ? countItem - 1 : prevItemActive - 1
    );
};

const countItem = items ? items.length : 0;

    return (
        <div className="selectPage">
            <header>
                <div className="logo">
                    <img src={muscle} alt="Muscle Logo" />
                    T10 SPORT
                </div>
                <div className="menu">
                    <BsList />
                </div>
            </header>

            {/* slider */}
            <div className="slider">
                {/* list Items */}
                <div className="list">
                <div className={`item ${itemActive === 0 ? "active" : ""}`}>
                    <img src={loginadmin} alt="" />
                        <div className="content">
                            <p>design</p>
                            <h2>Select Admin</h2>
                            <p>
                                Exercise not only makes your body stronger. But it also makes the mind full of energy. Work towards your goals with daily exercise. Come take your first step today!!
                                <br />
                                Do you want to log in as a admin?
                            </p> 
                            <Link className="btn" to="/LoginAdmin"><span>CONFIRM</span></Link>
                        </div>
                    </div>
                    <div className={`item ${itemActive === 1 ? "active" : ""}`}>
                        <img src="https://img.freepik.com/free-photo/muscular-sportsman-training-arms-with-dumbbell_7502-4782.jpg" alt="" />
                        <div className="content">
                            <p>design</p>
                            <h2>Select Trainer</h2>
                            <p>
                                Exercise not only makes your body stronger. But it also makes the mind full of energy. Work towards your goals with daily exercise. Come take your first step today!!
                                <br />
                                Do you want to log in as a trainer?
                            </p> 
                            <Link className="btn" to="/LoginTrainer"><span>CONFIRM</span></Link>
                        </div>
                    </div>
                    <div className={`item ${itemActive === 2 ? "active" : ""}`}>
                        <img src="https://img.freepik.com/free-photo/people-doing-indoor-cycling_23-2149270268.jpg" alt="" />
                        <div className="content">
                            <p>design</p>
                            <h2>Select Member</h2>
                            <p>
                                Exercise not only makes your body stronger. But it also makes the mind full of energy. Work towards your goals with daily exercise. Come take your first step today!!
                                <br />
                                Do you want to log in as a member?
                            </p>
                            <Link className="btn" to="/LoginMember"><span>CONFIRM</span></Link>
                        </div>
                    </div>
                </div>

                {/* button arrows */}
                <div className="arrows">
                    <button id="prev" onClick={handlePrevClick}>{"<"}</button>
                    <button id="next" onClick={handleNextClick}>{">"}</button>
                </div>

                {/* thumbnail */}
                <div className="thumbnail">
                <div className={`item ${itemActive === 0 ? "active" : ""}`} onClick={() => showSlider(0)}>
                        <img src={loginadmin}  alt="" />
                        <div className="content">
                            Login Admin
                        </div>
                    </div>
                    <div className={`item ${itemActive === 1 ? "active" : ""}`} onClick={() => showSlider(1)}>
                        <img src="https://img.freepik.com/free-photo/muscular-sportsman-training-arms-with-dumbbell_7502-4782.jpg" alt="" />
                        <div className="content">
                            Login Trainer
                        </div>
                    </div>
                    <div className={`item ${itemActive === 2 ? "active" : ""}`} onClick={() => showSlider(2)}>
                        <img src="https://i.pinimg.com/564x/5e/bb/e2/5ebbe2e93859cf4b130225925dca7377.jpg" alt="" />
                        <div className="content">
                            Login Member
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectPage;