import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

export default function SearchResults() {
  const { search } = useLocation();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);

      try {
        const res = await api.get(`/api/tours${search}`);
        const data = await res.json();
        setTours(data);
      } catch (err) {
        console.error("Error fetching tours:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [search]);

  if (loading) return <p>Loading tours...</p>;

  return (
    <div className="search-results">
      {tours.length ? (
        tours.map((tour) => (
          <div key={tour._id} className="tour-card">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>
              {tour.destination} - {tour.activity}
            </p>
          </div>
        ))
      ) : (
        <p>No tours found</p>
      )}
    </div>
  );
}
