import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [autentic, setAutentic] = useState(false);

  const [incorrectData, setIncorrectData] = useState(false);

  const [emptyData, setEmptyData] = useState(false);

  const [formData, setFormData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    return storedData || { name: "", email: "", password: "" };
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
    } else {
      alert("Please, complete all the fields of the form");
    }
    navigate("/sing-in");
    alert("You are already registered, enter again");
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
        setIncorrectData(true);
      }
    } else {
      setEmptyData(true);
    }
  };

  const logout = () => {
    setFormData({
      ...formData,
      name: "",
      email: "",
      password: "",
    });
    setAutentic(false);
    setIncorrectData(false);
    setEmptyData(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      alert("Please complete all the fields of the form");
    }
    navigate("/my-account");
  };

  const auth = {
    login,
    logout,
    handleChange,
    handleSubmit,
    autentic,
    storedFormData: formData,
    handleEdit,
    incorrectData,
    emptyData,
  };

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
