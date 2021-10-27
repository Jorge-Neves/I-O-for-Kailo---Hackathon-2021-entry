import React from "react";
import { NavLink } from "react-router-dom";
import Slide from 'react-reveal/Slide';

function Team() {
    return(
        <>
            <header className="team">
                <Slide left>
                    <h1>Meet the team</h1>
                </Slide>
            </header>
            <Slide left>
            <div className="flexHorizontal team-card">
                <div>
                    <img src="/ana.png" alt="team member ana" className="imageSizing" />
                </div>
                <div className="team-card-l">
                    <h2>Ana</h2> 
                    <p>
                    I'm a UX/UI Designer with an academic research background in Art History. 

I am passionate about understanding people's behaviors and my aim is to create intuitive and positive solutions. I believe that we can make the world a better place with just small actions
                    <br/>
                    <a href="https://www.linkedin.com/in/anavrvenancio/"><strong>Linkedin</strong></a>
                    </p>
                </div>
            </div>
            </Slide>
            <Slide right>
            <div className="flexHorizontal team-card">
                <div className="team-card-r">
                    <h2>Kara</h2>
                    <p>
                    I'm a UX/ UI Designer with a background in the accounts and fashion design sectors. My aim is to design and create user-friendly and aesthetically pleasing digital platforms (and give my dog the backyard he deserves!). 
                    <br/>
                    <a href="https://www.linkedin.com/in/kara-keddie/"><strong>Linkedin</strong></a>
                    </p>
                </div>
                <div>
                    <img src="/kara.png" alt="team member kara" className="imageSizing" />
                </div>
            </div>
            </Slide>
            <Slide left>
            <div className="flexHorizontal team-card">
                <div>
                    <img src="/joao.png" alt="team member joao" className="imageSizing" />
                </div>
                <div className="team-card-l">
                    <h2>João</h2>
                    <p>
                        I'm a full-stack web dev with a background in design looking to build a better, friendlier and easier tomorrow.
                        <br/>
                    <a href="https://www.linkedin.com/in/joamonteiro/"><strong>Linkedin</strong></a>
                    </p>
                </div>
            </div>
            </Slide>
            <Slide right>
            <div className="flexHorizontal team-card">
                <div className="team-card-r">
                    <h2>Paulo</h2>
                    <p>
                        I'm a full-stack web dev with a background in health sciences looking to innovate through programming.
                        <br/>
                    <a href="https://www.linkedin.com/in/paulo-j-santos/"><strong>Linkedin</strong></a>
                    </p>
                </div>
                <div>
                    <img src="/paulo.png" alt="team member paulo" className="imageSizing" />
                </div>
            </div>
            </Slide>
        </>
    )
}

export default Team;