const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
    date: String,
    description: String,
    },
    {
    
      timestamp: true,
});



const Vaccine = mongoose.model("Vaccine", vaccineSchema);

module.exports = Vaccine;