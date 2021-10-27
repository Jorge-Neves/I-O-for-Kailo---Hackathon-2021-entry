const mongoose = require("mongoose");

const vitalSchema = new mongoose.Schema({
    date: Number,
    temperature: Number,
    pulseRate: Number, 
    activityLevel: Number,
    weight: Number, 
    bm: Boolean,
    dog: String,
    },
    {
    
      timestamp: true,
});



const Vital = mongoose.model("Vital", vitalSchema);

module.exports = Vital;