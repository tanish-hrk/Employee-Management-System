const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const connectToDB = require('./config/db');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// ✅ Proper CORS Middleware
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' 
      ? ["https://emasy.vercel.app", "http://localhost:5173"]
      : "http://localhost:5173",
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

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a meeting room
  socket.on('join-meeting', (meetingId) => {
    socket.join(meetingId);
    console.log(`User ${socket.id} joined meeting ${meetingId}`);
    
    // Notify others in the room
    socket.to(meetingId).emit('user-joined', { userId: socket.id });
  });

  // Handle WebRTC signaling
  socket.on('offer', (data) => {
    socket.to(data.room).emit('offer', {
      offer: data.offer,
      from: socket.id
    });
  });

  socket.on('answer', (data) => {
    socket.to(data.room).emit('answer', {
      answer: data.answer,
      from: socket.id
    });
  });

  socket.on('ice-candidate', (data) => {
    socket.to(data.room).emit('ice-candidate', {
      candidate: data.candidate,
      from: socket.id
    });
  });

  // Handle chat messages
  socket.on('send-message', (data) => {
    socket.to(data.room).emit('receive-message', {
      message: data.message,
      from: socket.id,
      timestamp: new Date()
    });
  });

  // Leave meeting
  socket.on('leave-meeting', (meetingId) => {
    socket.leave(meetingId);
    socket.to(meetingId).emit('user-left', { userId: socket.id });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
