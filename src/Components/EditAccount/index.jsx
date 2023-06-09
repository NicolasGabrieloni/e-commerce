import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";
import SingIn from "../../Pages/SingIn";

function EditAccount() {
  const auth = useAuth();

  {
    if (!auth.autentic) return <SingIn />;
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-4">My account</h1>
      <div className="w-80">
        <form
          onSubmit={auth.handleEdit}
          className="flex flex-col mb-6 mt-6 w-full"
        >
          <div className="flex flex-col mb-4">
            <label className="mr-4" htmlFor="name">
              Your name:
            </label>
            <input
              className="border border-black rounded-lg h-10 text-center"
              onChange={auth.handleChange}
              value={auth.storedFormData?.name}
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
              onChange={auth.handleChange}
              value={auth.storedFormData?.email}
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
              onChange={auth.handleChange}
              value={auth.storedFormData?.password}
              id="password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="bg-black w-full h-12 mb-4 text-white rounded-lg"
          >
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default EditAccount;
