import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";
import Protected from "./components/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Main />
      </Protected>
    ),
  },
  // {
  //   path: "/",
  //   element: <Main />,
  // },
  {
    path: "/product/:id",
    element: (
      <Protected>
        <Product />
      </Protected>
    ),
  },
  { path: "/cart", element: <Cart /> },
  {
    path: "/wishlist",
    element: (
      <Protected>
        <WishList />
      </Protected>
    ),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
