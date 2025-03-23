const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const connectToDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// ✅ Proper CORS Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow common methods
    credentials: true, // Allow cookies and authentication headers
  })
);

// Connect to the database
(async () => {
  try {
    await connectToDB();
    console.log('Connected to the database successfully');
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the process if database connection fails
  }
})();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// Basic error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
