import React from 'react';
import { Link } from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
                {/* Writing Sidebar Section For reuse in components*/}

      <div className='left-section'>
        <section className='text-center'>
        <Link to="">
          <img src='images/Shamilogo.png' alt='shamiit_logo' className='img-fluid mb-4 mt-2'/> 
        </Link>
        <br/>
        <Link to="/dashboard">
          <button className='btn btn-warning mb-4 w-75'>Dashboard</button>
        </Link>

        </section>
        <section className='d-flex flex-column ps-3'>
          
            <Link className='mb-3' to=""> <i className='fa-solid fa-inbox text-white'></i> Inbox </Link>
            <Link className='mb-4' to="/calendar"> <i className='fa-solid fa-calendar-days text-white'></i> Calender & tools </Link>

            {/* recruitment section */}

            <h5 className='mb-3'>RECRUITMENT</h5>
            <Link className='mb-3' to="/jobs"> <i className="fa-solid fa-bag-shopping text-white"></i> Jobs </Link>
            <Link className='mb-3' to=""> <i className="fa-solid fa-user-group text-white"></i> Candidates </Link>
            <Link className='mb-3' to=""> <i className="fa-solid fa-square-caret-up text-white"></i> My Refferals </Link>
            <Link className='mb-4' to=""> <i className="fa-solid fa-book text-white"></i> Careers Site </Link>

            {/* organization section */}

            <h5 className="mb-3">ORGANIZATION</h5>
            <Link className='mb-3' to=""> <i className="fa-solid fa-user text-white"></i> Employee </Link>
            <Link className='mb-3' to=""> <i className="fa-solid fa-sitemap text-white"></i> Structure </Link>
            <Link className='mb-3' to=""> <i className="fa-brands fa-opera"></i> Reports </Link>
            <Link className='mb-5' to=""> <i className="fa-solid fa-gear text-white"></i> Settings </Link>
            <Link to=""> Need Help? </Link>
            <Link className='mb-4' to=""> Open our help center </Link>

        </section>
      </div>
    </>
  );
};

export default Sidebar;
