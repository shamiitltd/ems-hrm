import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/dashboard'
import Candidates from './components/Candidates/Candidates';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Dashboard/>}></Route>
      <Route path = "/Candidates" element = {<Candidates/>}></Route>
    </Routes>
   
   
    </BrowserRouter> 
    );
}

export default App;
