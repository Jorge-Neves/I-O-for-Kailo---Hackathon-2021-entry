import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Slide';

function Nutrition() {
    return(
        <>
        <Fade left>
        <div>
            <img src="/menu1.jpg" alt="nutrition dog" className="PositionAbsolute" />
        </div>
        <div>
            <img src="/menu1.jpg" alt="nutrition dog" className="PositionAbsolute2" />
        </div>
        <div>
            <img src="/menu1.jpg" alt="nutrition dog" className="PositionAbsolute3" />
        </div>
        <div>
            <img src="/menu1.jpg" alt="nutrition dog" className="PositionAbsolute4" />
        </div>
        <div>
            <img src="/menu1.jpg" alt="nutrition dog" className="PositionAbsolute5" />
        </div>
        </Fade>
        <Fade left>
        <div className="nutrition-c">
            
                <img src="/nutrition.svg" alt="nutrition dog" width="inherit"/>
            
          
        </div>
        </Fade>
    </>
    )
}

export default Nutrition;