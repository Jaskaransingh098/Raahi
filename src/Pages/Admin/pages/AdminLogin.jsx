import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css"; // create your own styles

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        username,
        password,
      });

      console.log("Response:", res.data); // ✅ Add this line

      if (res.data.success) {
        localStorage.setItem("adminAuth", "true"); // ✅ Store login flag
        navigate("/admin/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message); // ✅ Log error response
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <div className="login-image-section">
          {/* You can use any image URL here */}
          <img
            src="/admin/admin.jpg"
            alt="Abstract illustration of code"
          />
        </div>

        {/* 2. Right Section: For the Form */}
        <div className="login-form-section">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
