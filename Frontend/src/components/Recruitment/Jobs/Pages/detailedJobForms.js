import React from "react";
import Sidebar from "../../../Sidebar/sidebar";
import Header from "../../../Header/header";
import Menu from "../../../Menu/menu";
import JobForm from "./JobForm";

const DetailedView = () => {
  return(
    <div className="dashboard d-flex">
      {/* Adding Sidebar component  */}
      <Sidebar className="col-lg-2" />
      <div className="col-lg-10">
        {/* Adding Header component  */}
        <Header />
        <div className="d-flex">
          <div className="material">
            <JobForm />
          </div>
          <div className="menu">
            {/* Adding Menu component  */}
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
};

export default DetailedView;
