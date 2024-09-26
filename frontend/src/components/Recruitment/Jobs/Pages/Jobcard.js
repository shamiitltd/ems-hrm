import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JobCard = ({ title, company, location, candidates, jobType }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body">
        {/* Small Heading */}
        <h6 className="card-subtitle mb-2 text-muted">Job Information</h6>

        {/* Main Heading */}
        <h5 className="card-title">{title} </h5>

        {/* Candidate Data Section */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-subtitle">Candidates:</h6>
            <button className="btn btn-info">{candidates} Candidates</button>
          </div>
        </div>

        {/* Job Type Buttons */}
        <div className="mb-3">
          <button
            className={`btn btn-outline-primary me-2 ${
              jobType === "full-time" ? "active" : ""
            }`}
          >
            Full-Time
          </button>
          <button
            className={`btn btn-outline-secondary ${
              jobType === "part-time" ? "active" : ""
            }`}
          >
            Part-Time
          </button>
        </div>

        {/* Footer Section */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-danger">Draft</button>
          <button className="btn btn-outline-info">See Details</button>
        </div>
      </div>
    </div>
  </div>
);

const Jobcard = () => {
  const [activeSection, setActiveSection] = useState("active");

  // Example data for jobs
  const activeJobs = [
    {
      title: "Seniour product desiner",
      company: "arc",
      location: "nagpur",
      candidates: 5,
      jobType: "full-time",
    },
    {
      title: "full stack",
      company: "tcs",
      location: "City",
      candidates: 3,
      jobType: "part-time",
    },
    // Add more jobs here
  ];

  const inactiveJobs = [
    {
      title: "Seniour product desiner",
      company: "ABC",
      location: "nagpur",
      candidates: 7,
      jobType: "full-time",
    },
    {
      title: "python",
      company: "google",
      location: "Town",
      candidates: 2,
      jobType: "part-time",
    },
    // Add more jobs here
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <button
          className={`btn btn-primary ${
            activeSection === "active" ? "active" : ""
          }`}
          onClick={() => setActiveSection("active")}
        >
          Active Jobs
        </button>
        <button
          className={`btn btn-secondary ${
            activeSection === "inactive" ? "active" : ""
          }`}
          onClick={() => setActiveSection("inactive")}
        >
          Inactive Jobs
        </button>
      </div>
      {activeSection === "active" && (
        <div className="row">
          {activeJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              candidates={job.candidates}
              jobType={job.jobType}
            />
          ))}
        </div>
      )}
      {activeSection === "inactive" && (
        <div className="row">
          {inactiveJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              candidates={job.candidates}
              jobType={job.jobType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobcard;
