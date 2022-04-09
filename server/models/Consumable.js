//  make sure currentMood dataType is correct

const { Schema } = require("mongoose");

const consumableSchema = new Schema({
  dose: {
    type: Number,
  },

  note: {
    type: String,
  },

});

module.exports = consumableSchema;
