import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function AddVital() {
    const [date, setDate] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [pulseRate, setPulseRate] = useState(0);
    const [activityLevel, setActivityLevel] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bm, setBm] = useState();
    const [dog, setDog] = useState();

    const history = useHistory();

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
        };

        await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/dogs`, body);
        toast.success("Vital created");
        history.push("/dogs");
    }

    return(
        <>
            <h2>Add Vital</h2>
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

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddVital;