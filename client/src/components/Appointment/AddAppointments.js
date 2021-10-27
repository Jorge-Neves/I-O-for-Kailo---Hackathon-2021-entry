import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function AddAppointment() {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
  

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const body = {
            date,
            description,
        };

        await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/appointments`, body);
        toast.success("appointment created");
        history.push("/appointment");
    }

    return(
        <>
            <h2>Add Pet</h2>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <label>Date</label>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />

                <label>Description</label>
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddAppointment;