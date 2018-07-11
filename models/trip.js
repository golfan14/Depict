const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    location: {type: String},
    photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;