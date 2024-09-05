import "./signIn.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/authActions";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    const onLogin= ()=>{
      navigate("/");    // default page
    }

    const onSignup = () => {
      navigate("/signup");   // for navigating to signup page
    };


  // HTML Code
  return (
    <>
      <div className="text-center p-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <img
              src="images/LoginImage.png"
              alt="shamiit_logo"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <section className="mb-4">
              <button type="button" className="btn btn-warning me-2" onClick={onSignup}>
                Sign Up
              </button>
              <button type="button" className="btn btn-light" onClick={onLogin}>
                Sign In
              </button>
            </section>
            <section className="mb-4">
              <form>
                <input
                  type="email"
                  value={username}
                  onChange={(event)=> setUsername(event.target.value)}
                  placeholder=" ✉️ Enter Email"
                  className="form-control mb-2"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(event)=> setPassword(event.target.value)}
                  placeholder=" 🔑 Enter Password"
                  className="form-control mb-2"
                />
              </form>
            </section>
            <section className="mb-4">
              <span className="d-flex justify-content-between align-items-center">
                <small className="me-5">
                  <input type="checkbox" name="" id="check" />
                  <label htmlFor="check">Don't ask again</label>
                </small>
                <small>Forget password?</small>
              </span>
            </section>
            <button className="btn btn-primary" type="Submit" onClick={handleLogin}> {loading ? 'Logging in...' : 'Sign In'}
            </button>
            {<p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
