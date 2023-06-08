import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";

function MyAccount() {
  const auth = useAuth();

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-4">Welcome</h1>
       fachero del carajo
    </Layout>
  );
}

export default MyAccount;
