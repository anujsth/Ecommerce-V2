import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Protected from "./components/Protected";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WishList from "./pages/WishList";
import CheckOut from "./pages/CheckOut";

const Main = lazy(() => import("./pages/Main"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center">
            <p className="text-white text-3xl">⌛Loading...</p>
          </div>
        }
      >
        <Main />
        {/* <Protected>
        </Protected> */}
      </Suspense>
    ),
  },

  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <Cart />
      </Protected>
    ),
  },
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
  { path: "/checkout", element: <CheckOut /> },
]);
