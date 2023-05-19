import { useDispatch, useSelector } from "react-redux";

import { setItemQuantity } from "../Redux/features/cartSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { removeWishItems, setWishItems } from "../Redux/features/wishListSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ product, onClick, loading }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { wishItems } = useSelector((state) => state.wishList);
  const cartHandler = (e) => {
    e.stopPropagation();
    !toggle &&
      dispatch(setWishItems(product)) &&
      toast.success("Product added to wishlist!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    toggle && dispatch(removeWishItems(product));
    setToggle(!toggle);
  };
  useEffect(() => {
    wishItems.find((item) => {
      if (item.id === product.id) {
        setToggle(true);
      }
    });
  }, [wishItems]);

  return (
    <div
      className="h-[28rem] w-[23rem] flex flex-col items-center  mb-[1rem] cursor-pointer group"
      onClick={() => onClick(product.id)}
    >
      <img
        src={product.image}
        alt=""
        className="h-[70%] fill w-full object-contain border rounded-lg border-transparent"
      />
      <div className="w-full bg-black rounded-xl flex flex-col items-center shadow-md group-hover:shadow-xl group-hover:shadow-gray-500 shadow-gray-900 transition-all">
        <p className="text-white text-xl mt-2 font-semibold">
          {product.title.slice(0, 12)}
        </p>
        <div className="flex justify-between w-full mt-4 mb-4 px-4 items-center  ">
          <div className="flex flex-col items-center">
            <p className="text-gray-200 text-sm">Price</p>
            <p className="text-white text-lg">{`$ ${product.price}`}</p>
          </div>
          <div className="bg-blue-600 h-[2.6rem] w-[2.6rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-cyan-600   transition-all duration-250">
            {toggle ? (
              <AiFillHeart
                className="text-red-400 text-2xl"
                onClick={cartHandler}
              />
            ) : (
              <AiOutlineHeart
                className="text-white text-2xl"
                onClick={cartHandler}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
