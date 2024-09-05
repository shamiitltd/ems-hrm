import React from 'react';
import "./sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const Candidates = () => {
    navigate("/Candidates");
  };
  
  return (
    <>
      <div className='left-section'>
        <section className='text-center'>
        <img src='images/Shamilogo.png' alt='shamiit_logo' className='img-fluid mb-4 mt-2'/> <br/>
        <button className='btn btn-warning mb-4 w-75'>Dashboard</button>
        </section>
        <section className='d-flex flex-column ps-3'>
            <a href='#' className='mb-3'><i className='fa-solid fa-inbox'></i> Inbox </a>
            <a href='#' className='mb-4'><i className='fa-solid fa-calendar-days'></i> Calender & tools </a>
            <h5 className='mb-3'>RECRUITMENT</h5>
            <a href="#" className="mb-3"><i className="fa-solid fa-bag-shopping"></i> Jobs </a>
            <a  onClick={Candidates} className="mb-3"><i className="fa-solid fa-user-group"></i> Candidates</a>
            <a href="#" className="mb-3"><i className="fa-solid fa-square-caret-up"></i> My Referrals</a>
      
            <a href="#" className="mb-4"><i className="fa-solid fa-book"></i> Career Site</a>
            <h5 className="mb-3">ORGANIZATION</h5>
            <a href="#" className="mb-3"><i className="fa-solid fa-user"></i> Employee</a>
            <a href="#" className="mb-3"><i className="fa-solid fa-sitemap"></i> Structure</a>
            <a href="#" className="mb-3"><i className="fa-brands fa-opera"></i> Reports</a>
            <a href="#" className="mb-5"><i className="fa-solid fa-gear"></i> Settings</a>
            <a href="#">Need Help?</a>
            <p className="mb-4">Open our help center</p>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
