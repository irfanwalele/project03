const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }
})
const User = mongoose.model("User", userSchema);
module.exports = User;