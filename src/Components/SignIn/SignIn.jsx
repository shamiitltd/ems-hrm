import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
 import './SignIn.css'
import { useNavigate } from "react-router-dom";


function SignIn() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };
  

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userid === "Prachi@gmail.com" && password === "Prachi") {
      // alert ("Sign In Successful")
      navigate ("/Dashboard")
      setError (null)
      
    } else {
      alert ("Please enter valid email and password")
      setError("Invalid username or password");
    }
  };

  return (
    <div className="Components container row">
      <div className="img col-6">
        <img className="img-fluid w-75 h-auto" src="src/Images/Img2-removebg-preview (1).png" alt="" />
      </div>
      <div className="SignIn col-6">
        <form onSubmit={handleSubmit}>
          <center>
            <button type="button" className=" btn btn1 m-2 bg-warning">
              Sign In
            </button>
            <button type="button" className=" btn btn2 m-2 bg-light" onClick={handleSignUp}>
              Sign Up
            </button>
            <div className="m-4">
              <input
                className="Input w-75 rounded border p-2"
                placeholder="Email ID"
                type="email"
                value={userid}
                onChange={(event) => setUserid(event.target.value)}
              />
            </div>
            <div className="m-4">
              <input
                className="Input w-75 rounded border p-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="checkbox d-flex align-items-center justify-content-between w-75">
             <div className="d-flex align-items-center mx-2">
              <input type="checkbox" /> 
              <p className="mt-2 mx-2">dont ask again</p>
              </div>
              <div className="para">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div>
              <button className="btn bg-success px-4 text-light" type="Submit"  >
                Sign In
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </center>
        </form>
      </div>
    </div>



  );
}

export default SignIn;


