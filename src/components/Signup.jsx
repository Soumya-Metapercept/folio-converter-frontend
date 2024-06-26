import React from "react";

import "../Style/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="landing-page">
      <div className="left-half">
        <div className="container">
          <div className="half-width">
            <div className="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
              <div className="w-100" style={{ textAlign: "center" }}>
                <div className="link-fx fw-semibold fs-2 text-black">
                  {" "}
                  PwC DITA Parser{" "}
                </div>
                <p class="text-white-75 me-xl-8 mt-3">
                  {" "}
                  Welcome to your amazing app.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between fs-sm text-center text-sm-start">
          <p className="fw-medium text-black-50 py-2 mb-0">
            Copyright @ 2023 PwC
          </p>
        </div>
      </div>
      <div className="right-half">
        <div className="signup-form-container">
          <h2>Sign Up</h2>
          <form>
            {" "}
            <div className="mb-4">
              <input
                type="text"
                className="form-control form-control-lg py-3 rounded-0"
                id="login-username"
                name="login-username"
                placeholder="Email"
              />
              {/* <!--v-if--> */}
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg py-3 rounded-0"
                id="login-password"
                name="login-password"
                placeholder="Password"
              />
              {/* <!--v-if--> */}
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <Link
                  type="submit"
                  className="btn btn-lg btn-warning rounded-0"
                >
                  <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>{" "}
                  Sign In{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
