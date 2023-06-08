import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";

function SingUp() {
  const auth = useAuth();

  return (
    <Layout>
      <div className="flex flex-col items-center w-80">
        <h2 className="text-medium font-bold text-xl">Welcome</h2>
        <form
          onSubmit={auth.handleSubmit}
          className="flex flex-col mb-6 mt-6 w-full"
        >
          <div className="flex flex-col mb-4">
            <label className="mr-4" htmlFor="name">
              Your name:
            </label>
            <input
              className="border border-black rounded-lg h-10 text-center"
              placeholder="Pedro"
              type="text"
              id="name"
              name="name"
              onChange={auth.handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mr-4" htmlFor="email">
              Your email:
            </label>
            <input
              className="border border-black rounded-lg h-10 text-center"
              placeholder="pedropicapiedra@gmail.com"
              type="email"
              id="email"
              name="email"
              onChange={auth.handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mr-4" htmlFor="password">
              Your password:
            </label>
            <input
              className="border border-black rounded-lg h-10 text-center"
              placeholder="******"
              type="password"
              id="password"
              name="password"
              onChange={auth.handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-black w-full h-12 mb-4 text-white rounded-lg"
          >
            Create
          </button>
        </form>
      </div>
    </Layout>
  );
}
export default SingUp;
