import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TourList from "../components/TourList";
import CreateTour from "../components/CreateTour";
import TrekList from "../components/TrekList";
import CreateTrek from "../components/CreateTrek";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [showTourForm, setShowTourForm] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [showTrekForm, setShowTrekForm] = useState(false);
  const [editingTrek, setEditingTrek] = useState(null);
  const [tours, setTours] = useState([]);
  const [treks, setTreks] = useState([]);

  // Check admin login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminAuth");
    if (!isLoggedIn) {
      navigate("/admin/login");
    } else {
      fetchTours();
      fetchTreks();
    }
  }, [navigate]);

  // Fetch tours and treks
  const fetchTours = async () => {
    try {
      const res = await axios.get("/api/tours");
      setTours(res.data);
    } catch (err) {
      console.error("Error fetching tours:", err);
    }
  };

  const fetchTreks = async () => {
    try {
      const res = await axios.get("/api/treks");
      setTreks(res.data);
    } catch (err) {
      console.error("Error fetching treks:", err);
    }
  };

  // Tour handlers
  const handleEditTour = (tour) => {
    setEditingTour(tour);
    setShowTourForm(true);
  };

  const handleDeleteTour = async (id) => {
    try {
      const token = localStorage.getItem("adminAuth");
      await axios.delete(`/api/tours/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Tour deleted");
      await fetchTours();
      // setTours(tours.filter((tour) => tour._id !== id)); // Remove deleted tour
    } catch (err) {
      console.error("Delete failed", err.response?.data || err);
    }
  };

  const handleCloseTourForm = () => {
    setShowTourForm(false);
    setEditingTour(null);
    fetchTours(); // Refresh list
  };

  // Trek handlers
  const handleEditTrek = (trek) => {
    setEditingTrek(trek);
    setShowTrekForm(true);
  };

  const handleDeleteTrek = async (id) => {
    try {
      const token = localStorage.getItem("adminAuth");
      await axios.delete(`/api/treks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Trek deleted");
      setTreks(treks.filter((trek) => trek._id !== id));
    } catch (err) {
      console.error("Delete failed", err.response?.data || err);
    }
  };

  const handleCloseTrekForm = () => {
    setShowTrekForm(false);
    setEditingTrek(null);
    fetchTreks(); // Refresh list
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Tours Section */}
      <section className="dashboard-section">
        <h2>Treks</h2>
        <button
        className=""
          onClick={() => {
            setEditingTour(null);
            setShowTourForm(!showTourForm);
          }}
        >
          {showTourForm ? "Close Form" : "Create"}
        </button>
        {showTourForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <CreateTour
                onClose={handleCloseTourForm}
                initialData={editingTour}
              />
            </div>
          </div>
        )}

        <TourList
          isAdmin={true}
          onEdit={handleEditTour}
          onDelete={handleDeleteTour}
          tours={tours} // Pass local state
        />
      </section>

      {/* Treks Section */}
      {/* <section className="dashboard-section">
        <h2>Treks</h2>
        <button
          onClick={() => {
            setEditingTrek(null);
            setShowTrekForm(!showTrekForm);
          }}
        >
          {showTrekForm ? "Close Form" : "Create Trek"}
        </button>
        {showTrekForm && (
          <CreateTrek onClose={handleCloseTrekForm} initialData={editingTrek} />
        )}
        <TrekList
          isAdmin={true}
          onEdit={handleEditTrek}
          onDelete={handleDeleteTrek}
          treks={treks}
        />
      </section> */}
    </div>
  );
}

export default AdminDashboard;
