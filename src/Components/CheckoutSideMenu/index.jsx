import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProduct.filter(
      (product) => product.id != id
    );
    context.setCartProduct(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProduct,
      totalProducts: context.cartProduct.length,
      totalPrice: totalPrice(context.cartProduct),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProduct([]);
    context.setSearchTitle(null)
  };

  return (
    <aside
      className={`${
        context.openCheckout ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className={`${!context.openCheckout ? "hidden" : "flex"}`}
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        >
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProduct.map((product) => (
          <OrderCard
            handleDelete={handleDelete}
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center mb-4">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProduct)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg mb-6"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
