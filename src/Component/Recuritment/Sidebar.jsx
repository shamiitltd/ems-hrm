
import React from 'react';
import { BsBasket3 } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { IoTriangleOutline } from "react-icons/io5";
import { LuFileKey2 } from "react-icons/lu";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className='d-flex flex-column'>
    <div className="bg-dark text-white border rounded-lg vh-100 p-3">
      <h2 className="text-left border-bottom pb-2">Recruitment</h2>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
       <a className="nav-link text-white d-flex align-items-center" to="/jobs">
            <BsBasket3 className="me-2" />
            Jobs
     </a>
        </li>
        <li className="nav-item mb-2">
       <a className="nav-link text-white d-flex align-items-center" to="/candidates">
            <SlPeople className="me-2" />
            Candidates
     </a>
        </li>
        <li className="nav-item mb-2">
       <a className="nav-link text-white d-flex align-items-center" to="/referrals">
            <IoTriangleOutline className="me-2" />
            My Referrals
     </a>
        </li>
        <li className="nav-item">
       <a className="nav-link text-white d-flex align-items-center" to="/career">
            <LuFileKey2 className="me-2" />
            Career Site
     </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Sidebar