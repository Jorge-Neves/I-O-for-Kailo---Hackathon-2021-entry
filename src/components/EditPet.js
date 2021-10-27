import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { useHistory } from "react-router";

function EditPet({match}) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [size, setSize] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function getPet() {
          const project = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/dogs/${match.params.id}`
          );
    
          setName(project.data.name);
          setBreed(project.data.breed);
          setAge(project.data.age);
          setWeight(project.data.weight);
          setSize(project.data.size);
        }
        getPet();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name,
            breed,
            age,
            weight,
            size,
        }

        await axios.put(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/dogs/${match.params.id}`,
            body
        );

        toast.success("Pet updated");
        history.push("/pets");
    };

    return(
        <>
            <h2>Edit Pet details</h2>
            <form onSubmit={handleFormSubmit}>
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
                    type="number"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                />

                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditPet;