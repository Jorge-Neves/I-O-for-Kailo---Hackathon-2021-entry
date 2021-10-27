import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Slide';

function Appointments() {
    return(
        <div className="vethub-c">
            <Fade left>
                <div className="vethub-l"> 
                    <h2>History of Appointments</h2>
                    <span>
                        <h3>2021 / 08 / 12</h3>
                        <p>General Appointment</p>
                    </span>
                    <span>
                        <h3>2021 / 01 / 25</h3>
                        <p>Allergies Appointment</p>
                    </span>
                    <span>
                        <h3>2020 / 08 / 05</h3>
                        <p>General Appointment</p>
                    </span>
                    <span>
                        <h3>2020 / 02 / 21</h3>
                        <p>Small Surgery</p>
                    </span>
                    <span>
                        <h3>2020 / 02 / 18</h3>
                        <p>General Appointment</p>
                    </span>
                </div>
            </Fade>
            <Fade left>
                <div className="vethub-r">
                    <h5>Upcoming appointments</h5>
                    <span>
                        <h3>2020 / 02 / 18</h3>
                        <p>General Appointment</p>
                    </span>
                </div>
            </Fade>
        </div>
    )
}

export default Appointments;