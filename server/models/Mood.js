//  make sure currentMood dataType is correct

const { Schema } = require('mongoose');

const moodSchema = new Schema({
 currentMood: {
   type: Number, min: 1, max: 5
 },
 createdAt: {
  type: Date,
  default: Date.now,
  get: (timestamp) => dateFormat(timestamp),
},
});

module.exports = moodSchema;