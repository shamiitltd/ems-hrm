import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");    // default page
  };

  const handleSignup = () => {
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
            <button type="button" className="btn btn-warning me-2" onClick={handleSignup}>
                Sign Up
              </button>
              <button type="button" className="btn btn-light" onClick={handleLogin}>
                Sign In
              </button>
            </section>
            <section className="mb-4">
              <form>
                <input
                  className="form-control mb-2"
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                />
                <input
                  className='form-control mb-2'
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder=" ✉️ Enter Email"
                  className="form-control mb-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder=" 🔑 Enter Password"
                  className="form-control mb-2"
                />
              </form>
            </section>
            <button className="btn btn-primary">Sign In</button>
            <p className="mt-3">Already have an account? <a href="#">Sign In</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
