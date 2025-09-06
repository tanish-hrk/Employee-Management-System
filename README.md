# Employee Management System

A full-stack web application designed to streamline HR operations, boost productivity, and enhance employee engagement through a comprehensive set of features.

## Overview

This Employee Management System is built with modern web technologies to provide an efficient way to manage workforce, tasks, attendance, leaves, meetings, salaries, and performance tracking. It includes separate portals for admins and employees, along with a public landing page.

## Features

- **Live Meetings**: Schedule and conduct virtual meetings with your team seamlessly.
- **Performance Tracking**: Monitor and analyze employee performance with real-time metrics.
- **Task Management**: Assign and track tasks in real-time with detailed progress reports.
- **Attendance Tracking**: Automated attendance management with detailed reporting.
- **Salary Management**: Streamlined payroll processing and salary management system.
- **Employee Leaderboard**: Gamified performance tracking with real-time rankings.
- **Leave Management**: Request and approve leaves with ease.
- **User Authentication**: Secure login for admins and employees using JWT.
- **Dashboards**: Custom views for admins (e.g., total employees, active tasks) and employees (e.g., profile, attendance).

## Tech Stack

### Backend
- **Node.js** with **Express.js**
- **MongoDB** (via Mongoose)
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for frontend integration

### Frontend
- **React** with **Vite** for fast development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Lucide React** for icons

## Project Structure

```
Employee-Management-System/
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   ├── Admin/
│   │   │   └── admin.model.js
│   │   └── Employee/
│   │       ├── leave.model.js
│   │       ├── task.model.js
│   │       └── user.model.js
│   ├── routes/
│   │   ├── admin.routes.js
│   │   └── user.routes.js
│   └── services/
│       └── user.services.js
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── AdminPortal/
        │   ├── AdminRoutes.jsx
        │   └── pages/
        │       ├── Adminprofile.jsx
        │       ├── AppLayout.jsx
        │       ├── Auth.jsx
        │       ├── Categories.jsx
        │       ├── Dashboard.jsx
        │       ├── Employee.jsx
        │       ├── EmployeeProfile.jsx
        │       ├── Leaderboard.jsx
        │       ├── Meeting.jsx
        │       ├── Navbar.jsx
        │       ├── Notification.jsx
        │       ├── Sidebar.jsx
        │       └── Tasks.jsx
        ├── EmployeePortal/
        │   ├── EmployeeRoutes.jsx
        │   ├── assets/
        │   │   └── react.svg
        │   ├── context/
        │   │   └── TaskContext.jsx
        │   └── pages/
        │       ├── Attendance.jsx
        │       ├── Dashboard.jsx
        │       ├── Layout.jsx
        │       ├── Leaderboard.jsx
        │       ├── Leave.jsx
        │       ├── Login.jsx
        │       ├── Meetings.jsx
        │       ├── Model.jsx
        │       ├── Profile.jsx
        │       ├── Salary.jsx
        │       ├── Sidebar.jsx
        │       ├── Signup.jsx
        │       └── Tasks.jsx
        └── LandingPage/
            ├── LandingPage.jsx
            └── pages/
                ├── Authentication.jsx
                ├── Contact.jsx
                ├── Features.jsx
                ├── Footer.jsx
                ├── Hero.jsx
                ├── Integration.jsx
                ├── Navbar.jsx
                ├── Performance.jsx
                ├── Pricing.jsx
                ├── Testimonials.jsx
                └── Footer.jsx
```

## 🚀 Live Demo

- **Frontend**: https://emasy.vercel.app/
- **Backend**: https://emasy-server.vercel.app/

## Deployment

### Frontend (Vercel)
1. **Environment Variables**: Set the following in Vercel:
   - `VITE_API_URL`: `https://emasy-server.vercel.app`
   - `VITE_SOCKET_URL`: `https://emasy-server.vercel.app`

2. **Deploy**: Connect your GitHub repository to Vercel and deploy the frontend.

### Backend (Vercel)
1. **Environment Variables**:
   - `PORT`: 3000 (or hosting platform's default)
   - `JWT_SECRET`: Your JWT secret key
   - `MONGO_URI`: Your MongoDB connection string
   - `ADMIN_ID`: Admin login ID
   - `ADMIN_PASSWORD`: Admin password
   - `NODE_ENV`: production

2. **CORS Configuration**: Backend is configured to accept requests from `https://emasy.vercel.app`

### Local Development
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev
```

4. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## Default Credentials

- **Admin Login**:
  - ID: `TANISH05`
  - Password: `System@123`

- **Employee**: Create account via signup or use test data

## Features

- **Real-time Video Meetings** with WebRTC and Socket.IO
- **Task Management** with progress tracking
- **Leave Management** with approval workflow
- **Employee Dashboard** with analytics
- **Admin Portal** for management
- **Authentication** with JWT tokens
- **Responsive Design** with Tailwind CSS

## Usage

- Visit the landing page to learn about the features.
- Admins can log in to manage employees, tasks, and view reports.
- Employees can log in to view their dashboard, submit tasks, request leaves, and track attendance.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the ISC License.
