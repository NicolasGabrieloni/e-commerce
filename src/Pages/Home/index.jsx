import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useAuth } from "../../Components/auth";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import SingIn from "../SingIn";

function Home() {
  const context = useContext(ShoppingCartContext);
  const auth = useAuth();

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>We don't have anything :/</div>;
    }
  };

  {
    if (!auth.autentic) return <SingIn />;
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4"
        onChange={(e) => context.setSearchTitle(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
