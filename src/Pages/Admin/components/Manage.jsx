import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api";
import CreateTour from "../components/CreateTour";
import "../styles/Manage.css";

const ManageTourPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tourData, setTourData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      api
        .get(`/api/tours/${id}`)
        .then((res) => setTourData(res.data))
        .catch((err) => console.error("Failed to fetch tour:", err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading tour details...</p>;

  return (
    <div className="manage-tour-page">
      <div className="page-header">
        <h1>{id ? "Edit Tour" : "Create New Tour"}</h1>
        <button
          className="back-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          ← Back to Dashboard
        </button>
      </div>

      <CreateTour
        initialData={tourData}
        onClose={() => navigate("/admin/dashboard")}
      />
    </div>
  );
};

export default ManageTourPage;
