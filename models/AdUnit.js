// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  video_name: {
    type: String
  },
  video_link: {
    type: String
  },
  song_type: {
    type: String
  },
  song_name: {
    type: String
  }
},{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);