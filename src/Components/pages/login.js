import React, { useContext, useEffect } from "react";

import { UserContext } from "./../../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userCtx = useContext(UserContext);
  const { registerUser, authStatus, verifyingToken, formData } = userCtx;
  const navigate = useNavigate();

  useEffect(() => {
    verifyingToken();
    if (authStatus) {
      navigate("/catalogo");
    }
  }, [authStatus]);
  return (
    <>
      <div className="signin">
        <div className="back-img">
          <div className="sign-in-text text-center">
            <h2 className="active">Sign In</h2>
          </div>
          <div className="layer"></div>
          <p className="point">&#9650;</p>
        </div>
        <div className="form-section">
          <form action="#">
            <i className="fa fa-envelope"></i>{" "}
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                id="username"
                type="text"
                placeholder="Email o Nombre de usuario"
                required
              />
            </div>
            <br />
            <br />
            <i className="fa fa-lock"></i>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input placeholder="Password" type="password" id="password" />
            </div>
            <br />
            <p className="forgot-text">Forgot Password ?</p>
            <label
              className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
              for="checkbox-1"
            >
              <input
                type="checkbox"
                id="checkbox-1"
                className="mdl-checkbox__input"
              />
              <span className="keep-text mdl-checkbox__label">
                Keep me Signed In
              </span>
            </label>
          </form>
        </div>

        <button className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
          Sign In
        </button>
      </div>
    </>
  );
};

export default Login;
