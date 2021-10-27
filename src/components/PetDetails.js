import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function PetDetails({match}) {
    const[pet, setPet] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        async function getPetDetails() {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/dogs/${match.params.id}`
            );
            setPet(response.data);
        }
        getPetDetails();
    }, []);

    const handleDeletePet = async (id) => {
        await axios.delete(

        );
        toast.info(`Pet moved away`);
        history.push("/");
    };

    return(
        <>
            <img src="" alt="doggo"/>
            <h2>{pet.name}</h2>
            <p>{pet.breed}</p>
            <p>{pet.age}</p>
            <p>{pet.weight}</p>
            <p>{pet.size}</p>
        </>
    )
}

export default PetDetails;