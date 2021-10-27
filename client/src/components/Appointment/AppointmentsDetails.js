import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function AppointmentDetails({match}) {
    const[appointment, setAppointment] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        async function getAppointmentDetails() {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/appointments/${match.params.id}`
            );
            setPet(response.data);
        }
        getPetDetails();
    }, []);

    const handleDeleteAppointment = async (id) => {
        await axios.delete(
         `${process.env.REACT_APP_SERVER_HOSTNAME}/appointments/${id}`
        );
        toast.info(`Appointment deleted`);
        history.push("/");
    };

    return(
        <>
            <img src="" alt="doggo"/>
            <h2>{appointment.date}</h2>
            <p>{appointment.description}</p>
            

            <NavLink to={`/appointments/${appointment._id}/edit`}>Edit</NavLink>
            <button onClick={() => handleDeleteAppointment(appointment._id)}>Delete</button>
        </>
    )
}

export default AppointmentDetails;