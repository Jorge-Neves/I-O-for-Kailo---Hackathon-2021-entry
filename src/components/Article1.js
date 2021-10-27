import React from "react";
import { NavLink } from "react-router-dom";
import Slide from 'react-reveal/Slide';

function Article1() {
    return(
        <>
            <header className="team">
                <Slide left>
                <img src="/old_doggo.png" alt="I/O for kailo track"  />
                    
                </Slide>
            </header>
            <Slide left>
            <div className="flexHorizontal team-card">
                
                <div className="team-card-l">
                    <h2>11 healthy and natural treats for your dog</h2> 
                    <p>
                    German Shepherds have huge stimulation requirements because 
they are naturally hardworking, intelligent, and active life partners. 
Yet, other factors such as your dog’s age, health conditions, or energy 
level can also change how much exercise he should have!
                    </p>
                </div>
            </div>
            </Slide>
            <Slide left>
            <div className="flexHorizontal team-card">
                
                <div className="team-card-l">
                    
                    <p>
                    As your dog ages, his energy will slowly start decreasing. (Usually around 7 to 9 
years old) It’s totally normal for senior German Shepherds to be less active and 
enthusiastic about working out. But it doesn’t mean they don’t need exercise 
anymore.


                    </p>
                </div>
            </div>
            </Slide>
            <Slide left>
            <div className="flexHorizontal team-card">
                
                <div className="team-card-l">
                    
                    <p>
                    That’s why senior German Shepherds may need less exercise than a healthy adult in 
perfect shape. Around 1 hour of low-impact activity with some mental stimulation 
should be enough to keep them healthy and happy.


                    </p>
                </div>
            </div>
            </Slide>
            <Slide left>
            <div className="flexHorizontal team-card">
                
                <div className="team-card-l">
                    
                    <p>
                    The best way to spend your elderly dog’s energy is with joint-friendly exercise such 
as moderate walking, swimming, and free playtime.




                    </p>
                </div>
            </div>
            </Slide>
            <Slide left>
            <div className="flexHorizontal team-card">
                
                <div className="team-card-l">
                    
                    <p>
                    Source: https://doggiesport.com/how-much-exercise-does-your-germanshepherd-need/

                    </p>
                </div>
            </div>
            </Slide>
           
           
        
        </>
    )
}

export default Article1;