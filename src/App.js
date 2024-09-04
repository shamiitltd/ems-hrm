import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Component/Recuritment/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobdetail from './Component/Recuritment/Jobdetail';
import Candidate from './Component/Recuritment/Candidate';
import CareerSite from './Component/Recuritment/CareerSite';
import Myrefferral from './Component/Recuritment/Myrefferral';

import JobFrom from './Component/Pages/JobFrom';
import { Route1 } from './Component/Route1';
import Hiringpipe from './Component/Recuritment/Hiringpipe';

const App = () => {
  return (
    <Router>
      <div className='Dashboard d-flex'>
        <div className='col-auto'>
          <Sidebar />
        </div>
        <div className='col mx-3 bg-light mt-3'>
          <Routes>
            <Route path="/*" element={<Jobdetail />} />
            <Route path="/Candidate" element={<Candidate />} />
            <Route path="/Myrefferral" element={<Myrefferral />} />
            <Route path="/CareerSite" element={<CareerSite />} />
            <Route path="/Hiringpipe" element={<Hiringpipe />} />
            <Route path="/Jobfrom" element={<JobFrom/>} />
            
            <Route path="/Route" element={<Route1/>} />
            {/* <Route path="/Frombuild" element={<Frombuild/>}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
