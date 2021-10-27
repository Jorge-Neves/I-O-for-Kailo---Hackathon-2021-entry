const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date: String,
    description: String,
    },
    {
    
      timestamp: true,
});



const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;