import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./components/signIn/signIn";
import Signup from "./components/signup/signup";
import Dashboard from "./components/Dashboard/dashboard";
import Calendar from "./components/Calendar/maincalendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
