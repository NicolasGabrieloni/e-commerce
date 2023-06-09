import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";
import { Link } from "react-router-dom";
import SingIn from "../SingIn"

function MyAccount() {
  const auth = useAuth();

  {
    if (!auth.autentic) return <SingIn />;
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-4">My account</h1>
      <div>
        <p className="text-start">
          Name:
          <span className="font-semibold ml-2">
            {auth.storedFormData?.name}
          </span>
        </p>
        <p className="text-start">
          Email:
          <span className="font-semibold ml-3">
            {auth.storedFormData?.email}
          </span>
        </p>
        <Link to="/edit-account">
          <button className="w-80 border border-black rounded-lg h-11 mt-5 font-semibold">
            Edit
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default MyAccount;
