import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { useHistory } from "react-router";

function EditAppointment({match}) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function getAppointment() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/appointments/${match.params.id}`
          );
    
          setDate(response.data.date);
          setDescription(response.data.description);
        }
        getAppointment();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            date,
            description,
        }

        await axios.put(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/appointments/${match.params.id}`,
            body
        );

        toast.success("Appointment updated");
        history.push("/appoinments");
    };

    return(
        <>
            <h2>Edit Appointment</h2>
            <form onSubmit={handleFormSubmit}>
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

                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditAppointment;