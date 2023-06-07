import Layout from "../../Components/Layout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Components/auth";
import { NavLink } from "react-router-dom";

function SingIn() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    username === ""
      ? alert("please complete the data")
      : auth.login({ username });
  };

  const singUp = () => {
    return <Navigate to="/sing-up" />;
  };

  if (auth.user) {
    return <Navigate to="/sing-up" />;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center w-80">
        <h2 className="text-medium font-bold text-xl">Welcome</h2>
        <form className="flex flex-col mb-6 mt-6 w-80" onSubmit={login}>
          <div>
            <label className="mr-4" htmlFor="email">
              Email:
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none mb-2"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="password">
              Password:
            </label>
            <input
              className="outline-none mb-6"
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="bg-black w-full h-12 text-white font-bold rounded-lg"
          >
            Log In
          </button>
        </form>
        <p className="mb-6 border-b border-black text-xs">Forgot my password</p>
        <button
          onClick={singUp}
          className="w-full h-12 mb-4 border border-black rounded-lg"
        >
          <NavLink to="/sing-up">Sing Up</NavLink>
        </button>
      </div>
    </Layout>
  );
}

export default SingIn;
