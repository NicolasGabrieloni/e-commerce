import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
    setUser({ username });
    navigate("/");
  };

  const logout = () => {
    setUser(null);
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/sing-in" />;
  }
  return props.children;
};

export { AuthProvider, useAuth, AuthRoute };
