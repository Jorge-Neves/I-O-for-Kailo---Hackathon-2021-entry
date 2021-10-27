import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Fade from 'react-reveal/Slide';

function WeeklySchedule() {
    const [week, setWeek] = useState ([]);

    useEffect(() => {
        async function getWeek() {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/weekly`,
                { withCredentials: true }
            );
            setWeek(response.data);
        }
        getWeek();
    }, []);
    return(
        <>
            <header>
                <Fade bottom>
                    <h1>Nutrition</h1>
                </Fade>
            </header>
        </>
    )
}

export default WeeklySchedule;