import React from "react";
import "./dashboard.css";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import Menu from "../Menu/menu";

const Dashboard = () => {
  
    // Writing HTML code
  return (
    <div className="dashboard d-flex">
      {/* Adding Sidebar component  */}
      <Sidebar className="col-lg-2" />
      <div className="col-lg-10">
        {/* Adding Header component  */}
        <Header />
        <div className="d-flex">
          <div className="material">
            <div class="border-end">
              <div class="d-flex justify-content-between p-3">
                <h3>Dashboard</h3>
                <button>
                  <i class="fa-solid fa-play"></i> Getting Started
                </button>
              </div>
              <div class="w-100">
                <div className="d-flex w-100 justify-content-evenly mb-3">
                  <div className="material-left"></div>
                  <div className="material-right"></div>
                </div>
                <div className="d-flex w-100 justify-content-evenly">
                  <div className="material-left"></div>
                  <div className="material-right"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            {/* Adding Menu component  */}
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
