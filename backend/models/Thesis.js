const mongoose = require('mongoose');

const thesisSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  keywords: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Thesis', thesisSchema); 