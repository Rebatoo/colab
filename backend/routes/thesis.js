const express = require('express');
const router = express.Router();
const Thesis = require('../models/Thesis');

// Get all theses
router.get('/', async (req, res) => {
  try {
    const theses = await Thesis.find();
    res.json(theses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single thesis
router.get('/:id', async (req, res) => {
  try {
    const thesis = await Thesis.findById(req.params.id);
    if (!thesis) {
      return res.status(404).json({ message: 'Thesis not found' });
    }
    res.json(thesis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new thesis
router.post('/', async (req, res) => {
  const thesis = new Thesis({
    submitterEmail: req.body.submitterEmail,
    title: req.body.title,
    objective: req.body.objective,
    abstract: req.body.abstract,
    members: req.body.members,
    adviserEmail: req.body.adviserEmail,
    docsLink: req.body.docsLink,
    category: req.body.category,
    keywords: req.body.keywords,
    status: req.body.status || 'pending',
    feedback: []
  });

  try {
    const newThesis = await thesis.save();
    res.status(201).json(newThesis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update thesis
router.patch('/:id', async (req, res) => {
  try {
    const thesis = await Thesis.findById(req.params.id);
    if (!thesis) {
      return res.status(404).json({ message: 'Thesis not found' });
    }

    // Update only the fields that are provided
    const updateFields = [
      'title', 'objective', 'abstract', 'members', 
      'adviserEmail', 'docsLink', 'category', 
      'keywords', 'status', 'feedback'
    ];

    updateFields.forEach(field => {
      if (req.body[field] !== undefined) {
        thesis[field] = req.body[field];
      }
    });

    const updatedThesis = await thesis.save();
    res.json(updatedThesis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete thesis
router.delete('/:id', async (req, res) => {
  try {
    const thesis = await Thesis.findById(req.params.id);
    if (!thesis) {
      return res.status(404).json({ message: 'Thesis not found' });
    }

    await thesis.deleteOne();
    res.json({ message: 'Thesis deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 