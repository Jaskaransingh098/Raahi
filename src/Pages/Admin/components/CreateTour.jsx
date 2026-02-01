import { useEffect, useState } from "react";
import api from "../../../api";
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
    integralFaqs: [{ question: "", answer: "" }],
    infoFaqs: [{ question: "", answer: "" }],
    mainFaqs: [{ question: "", answer: "" }],
    included: [""], // new
    excluded: [""],
    costPackages: [
      { packageName: "", price: "", kidsDiscount: "", groupDiscount: "" },
    ],
    benefitHighlights: [""],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: initialData.tags ? initialData.tags.join(", ") : "",
        integralFaqs: initialData.integralFaqs?.length
          ? initialData.integralFaqs
          : [{ question: "", answer: "" }],
        infoFaqs: initialData.infoFaqs?.length
          ? initialData.infoFaqs
          : [{ question: "", answer: "" }],
        mainFaqs: initialData.mainFaqs?.length ? initialData.mainFaqs : [],
        included: initialData.included?.length ? initialData.included : [""],
        excluded: initialData.excluded?.length ? initialData.excluded : [""],
        costPackages: initialData.costPackages?.length
          ? initialData.costPackages
          : [
              {
                packageName: "",
                price: "",
                kidsDiscount: "",
                groupDiscount: "",
              },
            ],
        benefitHighlights: initialData.benefitHighlights?.length
          ? initialData.benefitHighlights
          : [""],
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["title", "location", "category"].includes(name) && value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFaqChange = (section, index, field, value) => {
    const updatedFaqs = [...formData[section]];
    updatedFaqs[index][field] = value;
    setFormData({ ...formData, [section]: updatedFaqs });
  };

  const addFaq = (section) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], { question: "", answer: "" }],
    });
  };

  const removeFaq = (section, index) => {
    const updatedFaqs = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: updatedFaqs });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = new FormData();

      const fields = [
        "type",
        "title",
        "description",
        "price",
        "discount",
        "duration",
        "location",
        "category",
      ];
      fields.forEach((f) => submitData.append(f, formData[f]));

      formData.tags
        .split(",")
        .map((t) => t.trim())
        .forEach((tag) => tag && submitData.append("tags", tag));

      // Append FAQs (as JSON)
      submitData.append("integralFaqs", JSON.stringify(formData.integralFaqs));
      submitData.append("infoFaqs", JSON.stringify(formData.infoFaqs));
      submitData.append("mainFaqs", JSON.stringify(formData.mainFaqs));
      submitData.append("included", JSON.stringify(formData.included));
      submitData.append("excluded", JSON.stringify(formData.excluded));
      submitData.append("batches", JSON.stringify(formData.batches));
      submitData.append("costPackages", JSON.stringify(formData.costPackages));
      submitData.append(
        "benefitHighlights",
        JSON.stringify(formData.benefitHighlights)
      );

      if (formData.image instanceof File)
        submitData.append("image", formData.image);

      if (initialData?._id) {
        await api.put(`/api/tours/${initialData._id}`, submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tour updated successfully!");
      } else {
        await api.post("/api/tours", submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Tour created successfully!");
      }

      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error submitting tour:", err);
      alert("Failed to save tour. Check console for details.");
    }
  };

  const handleArrayChange = (section, index, value) => {
    const updated = [...formData[section]];
    updated[index] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const addArrayItem = (section) => {
    setFormData({ ...formData, [section]: [...formData[section], ""] });
  };

  const removeArrayItem = (section, index) => {
    const updated = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: updated });
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Tour" : "Create New Tour"}</h2>

      <select
        name="type"
        className="admin-input-type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        <option value="">Select Type</option>
        <option value="HIMALAYAN TREKS">HIMALAYAN TREKS</option>
        <option value="BIKERS SPECIAL">BIKERS SPECIAL</option>
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
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (e.g. 3 Days / 1 Week)"
        value={formData.duration}
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
      <input
        type="number"
        name="discount"
        placeholder="Discount (only number)"
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
        required={!initialData}
      />
      {formData.batches?.map((batch, index) => (
        <div key={index} className="faq-item">
          <input
            type="text"
            placeholder="Batch Name (e.g. Batch 1)"
            value={batch.name}
            onChange={(e) => {
              const updated = [...formData.batches];
              updated[index].name = e.target.value;
              setFormData({ ...formData, batches: updated });
            }}
          />
          <input
            type="date"
            placeholder="Start Date"
            value={batch.startDate ? batch.startDate.split("T")[0] : ""}
            onChange={(e) => {
              const updated = [...formData.batches];
              updated[index].startDate = e.target.value;
              setFormData({ ...formData, batches: updated });
            }}
          />
          <input
            type="date"
            placeholder="End Date"
            value={batch.endDate ? batch.endDate.split("T")[0] : ""}
            onChange={(e) => {
              const updated = [...formData.batches];
              updated[index].endDate = e.target.value;
              setFormData({ ...formData, batches: updated });
            }}
          />
          {formData.batches.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => {
                const updated = formData.batches.filter((_, i) => i !== index);
                setFormData({ ...formData, batches: updated });
              }}
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="add-btn"
        onClick={() =>
          setFormData({
            ...formData,
            batches: [
              ...(formData.batches || []),
              { name: "", startDate: "", endDate: "" },
            ],
          })
        }
      >
        + Add Batch
      </button>

      <div className="faq-section">
        <h3>Tour Benefit Highlights</h3>
        {formData.benefitHighlights.map((item, index) => (
          <div key={index} className="faq-item">
            <input
              type="text"
              placeholder="Enter a benefit (e.g. Meals Included)"
              value={item}
              onChange={(e) =>
                handleArrayChange("benefitHighlights", index, e.target.value)
              }
            />
            {formData.benefitHighlights.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeArrayItem("benefitHighlights", index)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="add-btn"
          onClick={() => addArrayItem("benefitHighlights")}
        >
          + Add Benefit
        </button>
      </div>

      <div className="faq-section">
        <h3>Tour Cost Packages</h3>

        {formData.costPackages.map((pkg, index) => (
          <div
            key={index}
            className="faq-item grid grid-cols-4 gap-2 items-center"
          >
            <input
              type="text"
              placeholder="Package Name"
              value={pkg.packageName}
              onChange={(e) => {
                const updated = [...formData.costPackages];
                updated[index].packageName = e.target.value;
                setFormData({ ...formData, costPackages: updated });
              }}
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={pkg.price}
              onChange={(e) => {
                const updated = [...formData.costPackages];
                updated[index].price = e.target.value;
                setFormData({ ...formData, costPackages: updated });
              }}
            />
            <input
              type="text"
              placeholder="Kids Discount (e.g. 10%)"
              value={pkg.kidsDiscount}
              onChange={(e) => {
                const updated = [...formData.costPackages];
                updated[index].kidsDiscount = e.target.value;
                setFormData({ ...formData, costPackages: updated });
              }}
            />
            <input
              type="text"
              placeholder="Group Discount (e.g. 5%)"
              value={pkg.groupDiscount}
              onChange={(e) => {
                const updated = [...formData.costPackages];
                updated[index].groupDiscount = e.target.value;
                setFormData({ ...formData, costPackages: updated });
              }}
            />
            {formData.costPackages.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => {
                  const updated = formData.costPackages.filter(
                    (_, i) => i !== index
                  );
                  setFormData({ ...formData, costPackages: updated });
                }}
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={() =>
            setFormData({
              ...formData,
              costPackages: [
                ...formData.costPackages,
                {
                  packageName: "",
                  price: "",
                  kidsDiscount: "",
                  groupDiscount: "",
                },
              ],
            })
          }
        >
          + Add Package
        </button>
      </div>

      {/* --- FAQ Sections --- */}
      {["integralFaqs", "infoFaqs", "mainFaqs"].map((sectionKey) => (
        <div key={sectionKey} className="faq-section">
          <h3>
            {sectionKey === "integralFaqs"
              ? "Itinerary Faqs"
              : sectionKey === "infoFaqs"
              ? "Info Section"
              : "FAQ Section"}
          </h3>
          {formData[sectionKey].map((faq, index) => (
            <div key={index} className="faq-item">
              <input
                type="text"
                placeholder="Question"
                value={faq.question}
                onChange={(e) =>
                  handleFaqChange(sectionKey, index, "question", e.target.value)
                }
              />
              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleFaqChange(sectionKey, index, "answer", e.target.value)
                }
              />
              {formData[sectionKey].length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeFaq(sectionKey, index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-btn"
            onClick={() => addFaq(sectionKey)}
          >
            + Add Question
          </button>
        </div>
      ))}

      {["included", "excluded"].map((sectionKey) => (
        <div key={sectionKey} className="faq-section">
          <h3>
            {sectionKey === "included" ? "Included Items" : "Excluded Items"}
          </h3>
          {formData[sectionKey].map((item, index) => (
            <div key={index} className="faq-item">
              <input
                type="text"
                placeholder={
                  sectionKey === "included" ? "Included item" : "Excluded item"
                }
                value={item}
                onChange={(e) =>
                  handleArrayChange(sectionKey, index, e.target.value)
                }
              />
              {formData[sectionKey].length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeArrayItem(sectionKey, index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-btn"
            onClick={() => addArrayItem(sectionKey)}
          >
            + Add Item
          </button>
        </div>
      ))}

      <button type="submit">{initialData ? "Update" : "Add"}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default CreateTour;
