import { createContext, useState } from "react";

import clienteAxios from "../config/clienteAxios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null, email: null });
  const [authStatus, setAuthStatus] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post("/customers", dataForm);
      localStorage.setItem("token", res.data);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      clienteAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete clienteAxios.defaults.headers.common["x-auth-token"];
    }
    try {
      const res = token && (await clienteAxios.post("/customers/verify", {email: formData.email}));
      setUser(res.data);
      setAuthStatus(true);
    } catch (error) {
      console.log("Error Verificando token", error);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post("/usuario/login", dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthStatus(false);
  };

  const data = {
    registerUser,
    loginUser,
    handleChange,
    verifyingToken,
    logout,
    formData,
    user,
    authStatus,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
