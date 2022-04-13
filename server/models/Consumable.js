const mongoose = require("mongoose");
const { Schema } = mongoose;

const consumableSchema = new Schema({

  name: {
    type: String,
  },
  dosage: {
    type: String,
  },
  note: {
    type: String,
  },
  moods: [{ 
    type: Schema.Types.ObjectId,
    ref: "Mood",
  }],

});

const Consumable = mongoose.model("Consumable", consumableSchema);

module.exports = Consumable;