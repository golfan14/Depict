const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    facebookid: {type: String},
    trips: [{type: Schema.Types.ObjectId, ref: 'Trip' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;