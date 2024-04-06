// index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { adminLoginMiddleware } = require("./adminMiddleware"); // Import the admin middleware
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Admin login endpoint with middleware
app.post('/admin/login', adminLoginMiddleware, (req, res) => {
  // If the middleware is passed (i.e., login is successful), this handler will be executed
  // res.redirect('/dash');
  res.json({
    "msg": "hello"
  })
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
