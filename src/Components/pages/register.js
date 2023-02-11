import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";

import FormInput from "./../../Components/FormInput";
import { UserContext } from "./../../context/userContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const userCtx = useContext(UserContext);
  const { registerUser, authStatus, verifyingToken, formData } = userCtx;
  const navigate = useNavigate();

  useEffect(() => {
    verifyingToken();
    if (authStatus) {
      navigate("/catalogo");
    }
  }, [authStatus]);

  if (authStatus) return null;
  const sendData = (event) => {
    event.preventDefault();
    registerUser(formData);
  };

  return (
    <>
      <div className="container-reg">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Crea una cuenta</h4>
          <p className="text-center">Empieza con una cuenta gratis</p>
          <p>
            <a
              href="https://www.facebook.com"
              className="btn btn-block btn-twitter"
            >
              {" "}
              <i className="fab fa-twitter"></i>   Login Twitter
            </a>
            <a
              href="https://twitter.com"
              className="btn btn-block btn-facebook"
            >
              {" "}
              <i className="fab fa-facebook-f"></i>   Login Facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-dark">O</span>
          </p>
        </article>
        <Form onSubmit={(e) => sendData(e)} >
        <FormInput tipo="username" />
        <FormInput tipo="email" />
        <FormInput tipo="password" />

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock"></i>{" "}
              </span>
            </div>
            <input
              name="password"
              className="form-control"
              placeholder="Confirma tu contraseña"
              type="password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              {" "}
              Crear Cuenta{" "}
            </button>
          </div>
          <p className="text-center">
            ¿Ya cuentas con un registro? <a href="login">Log In</a>{" "}
          </p>
        </Form>
        <article />
      </div>
    </>
  );
};

export default Register;
