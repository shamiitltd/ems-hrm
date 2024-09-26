import "./App.css";

import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";

import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
