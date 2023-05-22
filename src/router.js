import { createBrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { lazy, Suspense } from "react";
import Protected from "./components/Protected";

const Main = lazy(() => import("./pages/Main"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Suspense
          fallback={
            <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center">
              <p className="text-white text-3xl">⌛Loading...</p>
            </div>
          }
        >
          <Main />
        </Suspense>
      </Protected>
    ),
  },

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
