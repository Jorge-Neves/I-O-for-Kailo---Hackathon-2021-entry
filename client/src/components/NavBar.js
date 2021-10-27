import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import "./NavBar.css";

function NavBar() {

    return(
        <>
        <nav className="navBarFlex">
                <div className="navbar">
                    <a href="/">
                        <img src="/kailo.svg" alt="logo that reads kailo" className="logoSizing" />
                    </a>
                </div>
                <div>
                    <NavLink exact to="/appointment">
                         <span className="NavBarText">Vethub</span>
                    </NavLink>
                </div>
                <div>
                        <span className="NavBarText">|</span>
                </div>
                <div>
                    <NavLink exact to="/data">
                        <span className="NavBarText">Activity</span>
                    </NavLink>
                </div>
                <div>
                        <span className="NavBarText">|</span>
                </div>
                <div>
                    <NavLink exact to="/nutrition">
                        <span className="NavBarText">Nutrition</span>
                    </NavLink>
                </div>
                <div>
                        <span className="NavBarText">|</span>
                </div>
                <div>
                    <NavLink exact to="/About">
                        <span className="NavBarText">About</span>
                    </NavLink>
                </div>
                <div>
                        <img src="/poodle.svg" alt="cartoon poodle" />
                </div>
        </nav>
        </>
    )
} 

export default NavBar;