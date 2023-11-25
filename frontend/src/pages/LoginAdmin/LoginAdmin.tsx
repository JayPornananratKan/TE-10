import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./style.css";

import { Link } from "react-router-dom";
import muscle from '../../img/muscle.png';
import { IoArrowBack } from "react-icons/io5";


function LoginAdmin() {
    const [logregBoxActive, setLogregBoxActive] = useState(false);

    const handleRegisterClick = () => {
        setLogregBoxActive(true);
    };

    const handleLoginClick = () => {
        setLogregBoxActive(false);
    };
    return (
        <div className="loginadmin">
            <header className="header">
                <nav className="navbar">
                    <a href="/"><IoArrowBack />Back</a>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
                <form action="#" className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"></button>
                </form>
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

                <div className={`logreg-box ${logregBoxActive ? 'active' : ''}`}>                    <div className="form-box login">
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

                            <Link to="/RegisterMember"><button type="submit" className="btn">
                                Sign In
                            </button></Link>

                            <div className="login-register">
                                <p>
                                    Don't have an account ? 
                                    <a href="#" className="register-link" onClick={handleRegisterClick}> Sign up</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="form-box register">
                        <form action="#">
                            <h2>Sign Up</h2>

                            <div className="input-box">
                                <span className="icon"></span>
                                <input type="text" required />
                                <label>Name</label>
                            </div>

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
                                    I agree to the terms & conditions
                                </label>
                            </div>

                            <button type="submit" className="btn">
                                Sign Up
                            </button>

                            <div className="login-register">
                                <p>
                                    Already have an account? <a href="#" className="login-link" onClick={handleLoginClick}>Sign in</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <script src="script.js"></script>
        </div>
    );
}

export default LoginAdmin;
