import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/createTour.css"; // Reuse the same CSS

const CreateTrek = ({ onClose, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    duration: "",
    difficulty: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData?._id) {
        await axios.put(`/api/treks/${initialData._id}`, formData);
        alert("Trek updated successfully!");
      } else {
        await axios.post("/api/treks", formData);
        alert("Trek created successfully!");
      }
      setFormData({ title: "", description: "", price: "", duration: "" });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error submitting trek:", err);
      alert("Failed to save trek");
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Trek" : "Create New Trek"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Trek Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="region"
        placeholder="Region (e.g., Sahyadri)"
        value={formData.region}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="duration"
        placeholder="Duration (e.g., 3 Days)"
        value={formData.duration}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="difficulty"
        placeholder="Difficulty (Easy, Moderate, Hard)"
        value={formData.difficulty}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price (INR)"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <button type="submit">{initialData ? "Update" : "Add"} Trek</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default CreateTrek;
