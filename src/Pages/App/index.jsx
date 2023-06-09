import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import { AuthProvider, AuthRoute } from "../../Components/auth";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import SingUp from "../../Components/Singup";
import EditAccount from "../../Components/EditAccount";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    {
      path: "/my-account",
      element: (
        <AuthRoute>
          <MyAccount />
        </AuthRoute>
      ),
    },
    {
      path: "/my-order",
      element: (
        <AuthRoute>
          <MyOrder />
        </AuthRoute>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <AuthRoute>
          <MyOrders />
        </AuthRoute>
      ),
    },
    {
      path: "/my-orders/last",
      element: (
        <AuthRoute>
          <MyOrder />
        </AuthRoute>
      ),
    },
    {
      path: "/my-orders/:id",
      element: (
        <AuthRoute>
          <MyOrder />
        </AuthRoute>
      ),
    },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/sing-up", element: <SingUp /> },
    { path: "/edit-account", element: <EditAccount /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </AuthProvider>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
