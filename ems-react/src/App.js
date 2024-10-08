import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/dashboard';
import Candidates from './components/Candidates/Candidates';
import UserProfile from './components/UserProfile/UserProfile'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Dashboard/>}></Route>
      <Route path = "/Candidates" element = {<Candidates/>}></Route>
      <Route path = "/UserProfile" element = {<UserProfile/>}></Route>
     
    </Routes>
   
   
    </BrowserRouter> 
    );
}

export default App;
