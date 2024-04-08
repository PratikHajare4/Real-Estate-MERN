
import listingRouter from "./routes/listing.route.js"
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";


import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
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

app.use('/api/listing', listingRouter)

// Admin login endpoint with middleware
// app.post('/admin/login', adminLoginMiddleware, (req, res) => {
//   // If the middleware is passed (i.e., login is successful), this handler will be executed
//   // res.redirect('/dash');
//   res.json({
//     "msg": "hello"
//   })
// });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})