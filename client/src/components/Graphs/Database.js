import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Slide';

function Database() {
    return(
        <Fade left>
        <div className="activity-c">
           <div className="activity-nav">
               <NavLink exact to="/life">Exercise Tracker</NavLink>
               <NavLink exact to="/life">Weight Tracker</NavLink>
               <NavLink exact to="/life">Vital Values</NavLink>
           </div>
           <div className="activity-cards-c">
                <NavLink exact to="/life">
                    <div className="activity-card">
                        <h2>Exercise Tracker</h2>
                        <img src="/ExerciseTracker.svg" alt="happy dog" className="imageSizing" />
                    </div>
               </NavLink>
               <NavLink exact to="/life">
               <div className="activity-card">
                   <h2>Weight Tracker</h2>
                   <img src="/WeightTracker.svg" alt="concerned dog" className="imageSizing" />
               </div>
               </NavLink>
           </div>
           <div className="activity-articles-c">
                <h3>Article & Tips</h3>
                <span>
                    <NavLink exact to="/article1">
                        <img src="/Exercise-card.png" alt="first dog"  height="300rem"/>
                    </NavLink>
                    <NavLink  exact to="/article2">
                        <img src="/Exercise-card-1.png" alt="second dog" height="300rem" />
                    </NavLink>
                    <NavLink  exact to="#">
                        <img src="/Exercise-card-2.png" alt="third dog" height="300rem" />
                    </NavLink>
                </span>
           </div>
        </div>
        </Fade>
    )
}

export default Database;