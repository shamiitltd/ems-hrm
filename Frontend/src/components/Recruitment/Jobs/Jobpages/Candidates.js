import React from "react";

const Candidates = () => {
  // Helper function to generate candidate cards
  const generateCards = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        className="card border-primary mb-2"
        style={{ minWidth: "130px", height: "70px" }}
        key={index}
      >
        <div className="card-body p-2 d-flex flex-column align-items-center">
          <h6 className="card-title mb-1 text-center">John Doe</h6>
          <div className="d-flex justify-content-between w-100">
            <p className="card-text mb-0" style={{ fontSize: "10px" }}>
              Rating: ⭐⭐⭐⭐
            </p>
            <p className="card-text mb-0" style={{ fontSize: "10px" }}>
              3 days ago
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-fluid mb-3">
      <div className="h-100">
        <div className="bg-light mt-1 py-1 d-flex justify-content-between align-items-center px-3">
          <h6 className="mb-0">Total Candidates</h6>
          <div className="d-flex">
            <button type="button" className="btn btn-light border btn-sm mx-1">
              Application
            </button>
            <button className="btn btn-light border btn-sm mx-1">
              Hiring Pipeline
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex  no-gutters flex-wrap">
        <div className="col-12 col-md-2 p-1 mb-2 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">New Applied</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(5)}
        </div>
        <div className="col-12 col-md-2 p-1 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">Screening</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(3)}
        </div>
        <div className="col-12 col-md-2 p-1 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">Design Challenge</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(4)}
        </div>
        <div className="col-12 col-md-2 p-1 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">Interview</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(3)}
        </div>
        <div className="col-12 col-md-2 p-1 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">Tests</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(2)}
        </div>
        <div className="col-12 col-md-2 p-1 d-flex flex-column">
          <div
            className="card border-top-primary mb-1"
            style={{
              width: "100%",
              height: "60px",
              borderTop: "4px solid #ff0000",
            }}
          >
            <div className="card-body p-2 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-center">Hired</h6>
              <span className="badge bg-secondary">New</span>
            </div>
          </div>
          {generateCards(4)}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
