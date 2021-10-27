const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
    name: String, 
    breed: String, 
    age: Number, 
    weight:Number, 
    size: String, 
});



const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;