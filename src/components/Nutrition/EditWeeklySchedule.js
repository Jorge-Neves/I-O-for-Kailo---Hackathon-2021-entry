import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { useHistory } from "react-router";

function EditWeeklySchedule() {
    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const history = useHistory();

    useEffect(() => {
        async function getWeek() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/weekly`
          );
    
          setMonday(response.data.monday);
          setTuesday(response.data.tuesday);
          setWednesday(response.data.wednesday);
          setThursday(response.data.thursday);
          setFriday(response.data.friday);
        }
        getWeek();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            date,
            description,
        }

        await axios.put(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/weekly/`,
            body
        );

        toast.success("Weekly updated");
        history.push("/WeeklySchedule");
    };

    return(
        <>
            <h2>Edit Weekly Schedule</h2>
            <form onSubmit={handleFormSubmit}>

                <label>Monday</label>
                <input
                    type="text"
                    onChange={(e) => setMonday(e.target.value)}
                    value={monday}
                />
                 <label>Tuesday</label>
                <input
                    type="text"
                    onChange={(e) => setTuesday(e.target.value)}
                    value={tuesday}
                />
                 <label>Wednesday</label>
                <input
                    type="text"
                    onChange={(e) => setWednesday(e.target.value)}
                    value={wednesday}
                />
                 <label>Thursday</label>
                <input
                    type="text"
                    onChange={(e) => setThursday(e.target.value)}
                    value={thursday}
                />
                 <label>Friday</label>
                <input
                    type="text"
                    onChange={(e) => setfriday(e.target.value)}
                    value={friday}
                />

                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditWeeklySchedule;