import React, { useState } from "react";
import Candidates from "../Jobpages/Candidates";
import Jdetailfrom from "../Jobpages/Jdetailfrom";
import Hiringteam from "../Jobpages/Hiringteam";
import Setting from "../Jobpages/Setting";

const JobForm = () => {
  const [activeComponent, setActiveComponent] = useState("candidate");
  const renderComponent = () => {
    switch (activeComponent) {
      case "Jdetailfrom":
        return <Jdetailfrom />;
      case "hiring-team":
        return <Hiringteam />;
      case "Setting":
        return <Setting />;
      default:
        return <Candidates />;
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col-md-8">
          <h1>Seniour Design</h1>
        </div>
        <div className="col-md-4 text-md-right">
          <button type="button" className="btn me-3 btn-primary">
            Share & Promote
          </button>
          <button type="button" className="btn btn-success">
            Published
          </button>
        </div>
      </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveComponent("Candidates")}
              >
                Candidate
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveComponent("Jdetailfrom")}
              >
                Job Details
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveComponent("hiring-team")}
              >
                Hiring Team
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveComponent("Setting")}
              >
                Setting
              </button>
            </li>
          </ul>
        </nav>
        <div className="content mt-4">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default JobForm;
