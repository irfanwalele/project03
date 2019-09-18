const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streamlineSchema = new Schema({
  username: { type: String, required: true },

});

const Streamline = mongoose.model("Streamline", streamlineSchema);

module.exports = Streamline;
