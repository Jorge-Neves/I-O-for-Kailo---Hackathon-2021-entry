import React from "react";
import { NavLink } from "react-router-dom";
import Slide from 'react-reveal/Slide';

function About() {
    return(
        <>
            <header>
                <Slide left>
                    <h1>About</h1>
                </Slide>
            </header>
            <Slide left>
            <img src="/Track.png" alt="I/O for kailo track" className="imageSizing" />
            </Slide>
            <Slide left>
            <div className="flexHorizontal">
                
                <div className="biggish-cards">
                    <NavLink exact to="/team">
                        <span className="NavBarText">Team</span>
                    </NavLink>
                </div>
                {/* <div>
                    <NavLink exact to="/data">
                        <span className="NavBarText">Resources</span>
                    </NavLink>
                </div> */}
            </div>
            </Slide>
        </>
    )
}

export default About;