const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const DB_URL = "mongodb+srv://2201104172:12345@cluster0.9qyv7.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const thesisRoutes = require('./routes/thesis');
const userRoutes = require('./routes/users');

app.use('/api/thesis', thesisRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Thesis Backend API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 