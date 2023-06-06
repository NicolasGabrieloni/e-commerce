import Layout from "../../Components/Layout";
import { useState } from "react";
import { useAuth } from "../../Components/auth";

function SingIn() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  const singUp = (e) => {
    e.preventDefault();
    console.log("sing up");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-80">
        <h2 className="text-medium font-bold text-xl">Welcome</h2>
        <form onSubmit={login} className="flex flex-col mb-6 mt-6">
          <div>
            <label className="mr-4" htmlFor="email">
              Email:
            </label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="outline-none"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="password">
              Password:
            </label>
            <input className="outline-none" type="password" id="password" />
          </div>
          <button
            type="submit"
            className="bg-black w-full h-12 mb-4 text-white font-bold rounded-lg"
          >
            Log In
          </button>
        </form>
        <p className="mb-6 border-b border-black text-xs">Forgot my password</p>
        <button
          onClick={singUp}
          className="w-full h-12 mb-4 border border-black rounded-lg"
        >
          Sing Up
        </button>
      </div>
    </Layout>
  );
}

export default SingIn;
