const mongoose = require("mongoose");
const { Schema } = mongoose;

const moodSchema = new Schema({
  
  dosed: {
    type: Boolean
  },
  depressants: {
    type: Boolean
  },
  lifestyle: {
    type: Number, min: 1, max: 5
  },
  physicalHealth: {
    type: Number, min: 1, max: 5
  },
  mentalHealth: {
    type: Number, min: 1, max: 5
  }, 
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;