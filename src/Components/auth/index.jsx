import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [autentic, setAutentic] = useState(false);
  console.log(autentic);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      localStorage.setItem("formData", JSON.stringify(formData));

      console.log("Usuario registrado exitosamente");
    } else {
      console.log("Por favor, completa todos los campos del formulario");
    }
    navigate("/sing-in");
    alert("usuario registrado, porfavor identifiquese");
  };

  const login = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const storedFormData = JSON.parse(localStorage.getItem("formData"));
      if (
        formData.email === storedFormData.email &&
        formData.password === storedFormData.password
      ) {
        setAutentic(true);
        navigate("/");
      } else {
        console.error("Error de autenticación");
      }
    } else {
      console.log("Por favor, completa todos los campos del formulario");
    }
  };

  const logout = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setAutentic(false);
  };

  const auth = { login, logout, handleChange, handleSubmit, autentic };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.autentic) {
    return <Navigate to="/sing-in" />;
  }
  return props.children;
};

export { AuthProvider, useAuth, AuthRoute };
