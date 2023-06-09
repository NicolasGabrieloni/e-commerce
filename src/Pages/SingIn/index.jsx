import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";
import { NavLink } from "react-router-dom";
import "./style.css";

function SingIn() {
  const auth = useAuth();

  return (
    <Layout>
      <div className="flex flex-col items-center w-80">
        <h2 className="text-medium font-bold text-xl">Welcome</h2>
        <form className="flex flex-col mb-6 mt-6 w-80" onSubmit={auth.login}>
          <div>
            <label className="mr-4" htmlFor="email">
              Email:
            </label>
            <input
              onChange={auth.handleChange}
              className="outline-none mb-2"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="password">
              Password:
            </label>
            <input
              onChange={auth.handleChange}
              className="outline-none mb-3"
              type="password"
              id="password"
              name="password"
            />
             <p className={auth.incorrectData ? "text-sm text-center mb-3 text-red-600" : "hidden"}>
              incorrect email or password 
            </p>
            <p className={auth.emptyData ? "text-sm text-center mb-3 text-red-600" : "hidden"}>
              Please complete the form
            </p>
          </div>
          <button
            type="submit"
            className="bg-black w-full h-12 text-white font-bold rounded-lg"
          >
            Log In
          </button>
        </form>
        <p className="mb-6 border-b border-black text-xs">Forgot my password</p>
        <button className="w-full h-12 mb-4 border border-black rounded-lg">
          <NavLink to="/sing-up">Sing Up</NavLink>
        </button>
      </div>
    </Layout>
  );
}

export default SingIn;
