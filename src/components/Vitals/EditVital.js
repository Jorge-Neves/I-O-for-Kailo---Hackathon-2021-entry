import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { useHistory } from "react-router";

function EditPet({match}) {
    const [date, setDate] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [pulseRate, setPulseRate] = useState(0);
    const [activityLevel, setActivityLevel] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bm, setBm] = useState();
    const [dog, setDog] = useState();

    const history = useHistory();

    useEffect(() => {
        async function getVital() {
          const project = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/vitals/${match.params.id}`
          );
    
          setDate(project.data.date);
          setTemperature(project.data.temperature);
          setPulseRate(project.data.pulseRate);
          setActivityLevel(project.data.activityLevel);
          setWeight(project.data.weight);
          setBm(project.data.bm);
          setDog(project.data.dog);
        }
        getVital();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            date,
            temperature,
            pulseRate,
            activityLevel,
            weight,
            bm,
            dog,
        }

        await axios.put(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/vitals/${match.params.id}`,
            body
        );

        toast.success("Vital updated");
        history.push("/pets");
    };

    return(
        <>
            <h2>Edit Vital</h2>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <label>Date</label>
                <input
                    type="number"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />

                <label>Temperature</label>
                <input
                    type="number"
                    onChange={(e) => setTemperature(e.target.value)}
                    value={temperature}
                />
                <label>Pulse Rate</label>
                <input
                    type="number"
                    onChange={(e) => setPulseRate(e.target.value)}
                    value={pulseRate}
                />
                <label>Activity Level</label>
                <input
                    type="number"
                    onChange={(e) => setActivityLevel(e.target.value)}
                    value={activityLevel}
                />
                <label>Weight</label>
                <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                />
                <label>Bowel movement</label>
                <input
                    type="checkbox"
                    onChange={(e) => setBm(e.target.value)}
                    value={bm}
                />
                <label>Dog Name</label>
                <input
                    type="text"
                    onChange={(e) => setDog(e.target.value)}
                    value={dog}
                />

                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditPet;