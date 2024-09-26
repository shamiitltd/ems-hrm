import React from "react";
import "./SignUp.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  const handleSignIN = () => {
    navigate("/SignIn");
  };

  return (
    <div className="Components  container-2  row">
      <div className="img col-6">
        <img className="img-fluid w-75 h-auto" src="src/Images/Img2-removebg-preview (1).png" alt="" />
      </div>
      <div className="SignIn col-6">
        <form action="">
          <center>
            <button type="button" className="btn btn1 m-2 bg-warning" onClick={handleSignIN}>
              Sign In
            </button>{" "}
            <button className="btn btn2 m-2 bg-light">Sign Up</button>
            <div className="m-4">
              <input
                className="Input w-75 rounded border p-2"
                placeholder="Enter Your First Name"
                type="text"
              />
            </div>
            <div className="m-4">
              <input
                className="Input w-75 rounded border p-2"
                placeholder="Enter Your Last Name"
                type="text"
              />
            </div>
            <div className="m-4">
              <input className="Input w-75 rounded border p-2" placeholder="Email ID" type="email" />
            </div>
            <div className="m-4">
              <input className="Input w-75 rounded border p-2" placeholder="Password" type="password" />
            </div>
            <div>
              <button className="btn bg-success px-4 text-light">Sign Up</button>
            </div>
            <div className="checkbox">
              <p>Already have an Account? Sign In</p>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
