import React from 'react';
import { BsBasket3 } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { IoTriangleOutline } from "react-icons/io5";
import { LuFileKey2 } from "react-icons/lu";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className='d-flex flex-column'>
      <div className="bg-dark text-white border rounded-lg vh-100 p-3">
        <h2 className="text-left border-bottom pb-2">Recruitment</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white d-flex align-items-center" to="/Jobdetail">
              <BsBasket3 className="me-2" />
              Jobs
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white d-flex align-items-center" to="/Candidate">
              <SlPeople className="me-2" />
              Candidates
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white d-flex align-items-center" to="/Myrefferral">
              <IoTriangleOutline className="me-2" />
              My Referrals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white d-flex align-items-center" to="/CareerSite">
              <LuFileKey2 className="me-2" />
              Career Site
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white d-flex align-items-center" to="/Hiringpipe">
              <LuFileKey2 className="me-2" />
              Hiring pipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar;
