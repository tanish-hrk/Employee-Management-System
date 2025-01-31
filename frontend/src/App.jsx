import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminPortal/AdminRoutes";
import EmployeeRoutes from "./EmployeePortal/employeeRoutes";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin Portal */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Employee Portal */}
        <Route path="/employee/*" element={<EmployeeRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
