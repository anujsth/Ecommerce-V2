import React, { useEffect, useState } from "react";
import { setCartQuantity, setItemCart } from "../Redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishItems } from "../Redux/features/wishListSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishListItem = ({ product }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const clickHandler = (product) => {
    dispatch(
      setItemCart({
        id: product.id,
        title: product.title,
        cost: product.price,
        category: product.category,
        image: product.image,
        quantity: 1,
      })
    );
    dispatch(setCartQuantity(1));
    toast.success("🦄 Product Added!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        setToggle(true);
      }
    });
  }, [cartItems]);

  return (
    <div className="flex mt-10 ">
      <div className="w-[990%] md:w-[60%] flex items-cn">
        <img
          src={product.image}
          alt=""
          className="h-full w-16 mr-3 object-contain"
        />
        <div className="flex flex-col">
          <p>{product.title}</p>
          <p className="text-red-500">{product.category}</p>
        </div>
      </div>
      <div className=" w-[16%] m-auto">{product.quantity}</div>
      <div className="w-[16%] m-auto">${product.price}</div>
      <div className="flex flex-col md:flex-row ml-4 mr-2">
        <div
          className={`w-[6rem] ml-4 md:w-[8rem] m-auto ${
            toggle ? "bg-green-600" : "bg-blue-500"
          } text-white rounded-lg py-1 cursor-pointer hover:scale-105`}
          onClick={() => (toggle ? navigate("/cart") : clickHandler(product))}
        >
          <p className="font-semibold text-center">
            {toggle ? "Go to cart" : "Add to cart"}
          </p>
        </div>
        <div
          className={`w-[6rem] ml-4 md:w-[8rem] m-auto bg-red-600
        } text-white rounded-lg py-1 cursor-pointer hover:scale-105`}
          onClick={() => {
            dispatch(removeWishItems(product));
            toast.warn("Product Removed from Wish List", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          <p className="text-center font-[1rem]">Remove</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WishListItem;
