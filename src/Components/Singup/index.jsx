import Layout from "../../Components/Layout";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const form = useRef(null);
  const navigate = useNavigate();

  const createAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    data.name === "" | data.email === "" | data.password === ""
      ? alert("please complete the data")
      : saveData(data)
        navigate("/");
        console.log(data)
  };

  const saveData = (data) => {
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-80">
        <h2 className="text-medium font-bold text-xl">Welcome</h2>
        <form ref={form} className="flex flex-col mb-6 mt-6 w-full">
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
            />
          </div>
          <button
            onClick={() => createAccount()}
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
