import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import TourList from "../components/TourList";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  // Check admin login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminAuth");
    if (!isLoggedIn) {
      navigate("/admin/login");
    } else {
      fetchTours();
    }
  }, [navigate]);

  // Fetch Tours
  const fetchTours = async () => {
    try {
      const res = await api.get("/api/tours");
      setTours(res.data);
    } catch (err) {
      console.error("Error fetching tours:", err);
    }
  };

  // Delete Tour
  const handleDeleteTour = async (id) => {
    try {
      const token = localStorage.getItem("adminAuth");
      await api.delete(`/api/tours/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Tour deleted successfully");
      fetchTours();
    } catch (err) {
      console.error("Delete failed", err.response?.data || err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="dashboard-section">
        <h2>Tours</h2>
        <button className="create-btn" onClick={() => navigate("/admin/tour")}>
          Create Tour
        </button>

        <TourList
          isAdmin={true}
          onEdit={(tour) => navigate(`/admin/tour/${tour._id}`)}
          onDelete={handleDeleteTour}
          tours={tours}
        />
      </section>
    </div>
  );
}

export default AdminDashboard;
