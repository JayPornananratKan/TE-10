import React, { useState, useEffect } from "react";
import { BsList, BsBoxArrowInRight } from "react-icons/bs";
import "./style.css";

import muscle from '../../img/muscle.png';
import { IoArrowBack } from "react-icons/io5";

function LoginMember() {
    const [logregBoxActive, setLogregBoxActive] = useState(false);

    const handleRegisterClick = () => {
        setLogregBoxActive(true);
    };

    const handleLoginClick = () => {
        setLogregBoxActive(false);
    };
    return (
        <div className="loginmember">
            <header className="header">
                <nav className="navbar">
                    <a href="/"><IoArrowBack />Back</a>
                    <a className="icon"><BsList/></a>
                </nav>
            </header>

            <div className="background"></div>

            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img src={muscle} alt="Muscle Logo" />
                        T10 SPORT
                    </div>

                    <div className="text-sci">
                        <h2>
                            Welcome! <br />
                            <span>To Our New Website.</span>
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nihil!</p>

                    </div>
                </div>

                <div className={`logreg-box ${logregBoxActive ? 'active' : ''}`}>                    
                    <div className="form-box login">
                        <form action="#">
                            <h2>Sign In</h2>

                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="email" required />
                                <label>Email</label>
                            </div>

                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="password" required />
                                <label>Password</label>
                            </div>

                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#">Forgot password</a>
                            </div>

                            <button type="submit" className="btn">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <script src="script.js"></script>
        </div>
    );
}

export default LoginMember;
