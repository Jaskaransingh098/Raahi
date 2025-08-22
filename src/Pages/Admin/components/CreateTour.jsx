import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/createTour.css";

const CreateTour = ({ onClose, initialData = null }) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    duration: "",
    location: "",
    category: "",
    tags: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: initialData.tags ? initialData.tags.join(", ") : "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // First letter capital for text inputs
    if (["title", "location", "category"].includes(name) && value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    // setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = new FormData();
      submitData.append("type", formData.type);
      submitData.append("title", formData.title);
      submitData.append("description", formData.description);
      submitData.append("price", Number(formData.price));
      if (formData.discount !== "") {
        submitData.append("discount", Number(formData.discount));
      }
      submitData.append("duration", formData.duration);
      submitData.append("location", formData.location);
      submitData.append("category", formData.category);

      // Tags
      formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .forEach((tag) => {
          if (tag) submitData.append("tags", tag);
        });

      // Image file
      if (formData.image instanceof File) {
        submitData.append("image", formData.image);
      }

      if (initialData?._id) {
        await axios.put(`/api/tours/${initialData._id}`, submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tour updated successfully!");
      } else {
        await axios.post("/api/tours", submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tour created successfully!");
      }

      setFormData({
        type: "",
        title: "",
        description: "",
        price: "",
        discount: "",
        duration: "",
        location: "",
        category: "",
        tags: "",
        image: "",
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error submitting tour:", err);
      alert("Failed to save tour");
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Tour" : "Create New"}</h2>

      <select
        name="type"
        className="admin-input-type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        <option value="">Select Type</option>
        <option value="SAHYADRI TREKS">SAHYADRI TREKS</option>
        <option value="HIMALAYAN TREKS">HIMALAYAN TREKS</option>
        <option value="BIKERS SPECIAL">BIKERS SPECIAL</option>
        <option value="BACKPACKING TOURS">BACKPACKING TOURS</option>
      </select>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category (e.g., Adventure, Road trip, Safari)"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <select
        name="duration"
        className="admin-input-type"
        value={formData.duration}
        onChange={handleChange}
        required
      >
        <option value="">Select Duration</option>
        <option value="1 - 3 Days">1 - 3 Days</option>
        <option value="4 - 7 Days">4 - 7 Days</option>
        <option value="8+ Days">8+ Days</option>
      </select>

      <input
        type="number"
        name="price"
        placeholder="Price (INR)"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="discount"
        placeholder="Only number, no %"
        value={formData.discount}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={handleChange}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        required={!initialData} // Required only for new tour
      />

      <button type="submit">{initialData ? "Update" : "Add"}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default CreateTour;
