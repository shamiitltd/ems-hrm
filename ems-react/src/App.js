import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/dashboard'
import Candidates from './components/Candidates/Candidates';
import User_profile from './components/User_Profile/User_profile';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Dashboard/>}></Route>
      <Route path = "/Candidates" element = {<Candidates/>}></Route>
      <Route path = "/User_profile" element = {<User_profile/>}></Route>
      
    </Routes>
   
   
    </BrowserRouter> 
    );
}

export default App;
