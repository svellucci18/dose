const mongoose = require("mongoose");
const { Schema } = mongoose;

const moodSchema = new Schema({
  
  dosed: {
    type: Boolean,
    required: true,
  },
  depressants: {
    type: Boolean,
    required: true,
  },
  lifestyle: {
    type: Number, min: 1, max: 5,
    required: true,
  },
  physicalHealth: {
    type: Number, min: 1, max: 5,
    required: true,
  },
  mentalHealth: {
    type: Number, min: 1, max: 5,
    required: true,
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

const consumableSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  moods: [moodSchema],

});

const Consumable = mongoose.model("Consumable", consumableSchema);

module.exports = Consumable;