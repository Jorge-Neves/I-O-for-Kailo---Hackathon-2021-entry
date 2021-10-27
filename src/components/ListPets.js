import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ListPets() {
    const [pets, setPets] = useState ([]);

    useEffect(() => {
        async function getAllPets() {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/dogs`,
                { withCredentials: true }
            );
            setPets(response.data);
        }
        getAllPets();
    }, []);

    return (
        <ul>
            {pets.map((pet) => {
                return (
                    <li key={pet._id}>
                        <NavLink to={`/dogs/${pet._id}`}>{pet.name}</NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default ListPets;