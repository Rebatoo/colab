const mongoose = require('mongoose');

const thesisSchema = new mongoose.Schema({
  submitterEmail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  members: [{
    email: {
      type: String,
      required: true
    }
  }],
  adviserEmail: {
    type: String,
    required: true
  },
  docsLink: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['AI', 'Web Development', 'Mobile Development', 'Networking', 'Database', 'Security']
  },
  keywords: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  feedback: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Thesis', thesisSchema); 