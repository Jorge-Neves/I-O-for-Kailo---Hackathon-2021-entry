import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function VitalDetails({match}) {
    const[vital, setVital] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        async function getPetDetails() {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/vitals/${match.params.id}`
            );
            setVital(response.data);
        }
        getPetDetails();
    }, []);

    const handleDeleteVital = async (id) => {
        await axios.delete(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/vitals/${id}`
        );
        toast.info(`Delete vital`);
        history.push("/");
    };

    return(
        <>
            <img src="" alt="doggo"/>
            <h2>{vital.date}</h2>
            <p>{vital.temperature}</p>
            <p>{vital.pulseRate}</p>
            <p>{vital.activityLevel}</p>
            <p>{vital.weight}</p>
            <p>{vital.bm}</p>
            <p>{vital.dog}</p>
        
            <button onClick={handleDeleteVital}>Delete</button>
        </>
    )
}

export default VitalDetails;