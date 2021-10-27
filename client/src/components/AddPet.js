import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function AddPet() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [size, setSize] = useState("");

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name,
            breed,
            age,
            weight,
            size,
        };

        await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/dogs`, body);
        toast.success("Pet created");
        history.push("/pets");
    }

    return(
        <>
            <h2>Add Pet</h2>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <label>Name</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>Breed</label>
                <input
                    type="text"
                    onChange={(e) => setBreed(e.target.value)}
                    value={breed}
                />
                <label>Age</label>
                <input
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <label>Weight</label>
                <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                />
                <label>Size</label>
                <input
                    type="text"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddPet;