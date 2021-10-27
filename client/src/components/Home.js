import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Slide';

function Home() {
    return(
        <div className="home-c">
        <div className="home-left-c">
            <Fade bottom>
            <div className="home-left">
                <h2>Are you looking for 
                    a platform that makes
                    your sidekick life happier?
                </h2>
            </div>
            </Fade>
        </div>
            <Fade right>
            <div className="flexHorizontal home-right-c">
                <img src="/3doggos.svg" alt="3 dogs" className="imageSizing" />
                {/* <div>
                    <img src="/poodle.svg" alt="team member paulo" className="imageSizing" />
                </div>
                <div>
                    <p>
                        This is your personal page to keep log your animal friend's vitals to help your health professional
                    </p>
                </div> */}
            </div>
            </Fade>
        </div>
    )
}

export default Home;