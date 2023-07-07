const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: true
  },
  release_year: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);