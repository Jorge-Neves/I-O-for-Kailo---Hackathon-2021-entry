const mongoose = require("mongoose");

const weeklySchema = new mongoose.Schema({
    monday: String,
    tuesday: String,
    wednesday: String, 
    tuesday: String,
    friday: String,
    observation: String,
    },
    {
    
      timestamp: true,
});



const Weekly = mongoose.model("Weekly", weeklySchema);

module.exports = Weekly;