import React, { useState, useEffect } from "react";
import "./Candidates.css";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import Menu from "../Menu/menu";

const Candidates = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    rating: "",
    stages: [], // Change this to an empty array
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch candidate data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/06197632-45a4-4700-b755-95d5fd3a8d8a"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCandidate({
          name: data.name,
          rating: data.rating,
          stages: data.stages || [], // Ensure it's an array
        });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangeRating = (e) => {
    setCandidate({ ...candidate, rating: parseInt(e.target.value) });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="dashboard d-flex">
      <Sidebar className="col-lg-2" />
      <div className="col-lg-10">
        <Header />
        <div className="d-flex">
          <div className="material">
            <div className="border-end">
              <div className="d-flex justify-content-between p-3">
                <h3>Candidates</h3>
                <button>
                  <i className="fa-solid fa-play"></i> Getting Started
                </button>
              </div>
              <div className="App">
                <div className="candidate-card">
                  <h2>Name {candidate.name}</h2>
                  <div className="rating">
                    <h2>Rating</h2>
                    <input
                      type="number"
                      value={candidate.rating}
                      min="1"
                      max="10"
                      onChange={handleChangeRating}eti 
                    />
                  </div>
                  <div className="stages">
                    <h3>Stages:</h3>
                    {Array.isArray(candidate.stages) &&
                    candidate.stages.length > 0 ? (
                      <ul>
                        {candidate.stages.map((stage, index) => (
                          <li key={index}>{stage}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No stages available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
