const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    facebookid: {type: String},
    location: {type: String}
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;