import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { removeWishItems, setWishItems } from "../Redux/features/wishListSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ product, onClick, loading }) => {
  const { loggedIn } = useSelector((state) => state.authentication);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { wishItems } = useSelector((state) => state.wishList);
  const navigate = useNavigate();
  const cartHandler = (e) => {
    e.stopPropagation();
    if (loggedIn) {
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
    } else {
      navigate("/signin");
    }
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
        className="h-[70%] fill w-full object-contain border rounded-lg border-transparent hover:scale"
      />
      <div className="w-full bg-[#152238] rounded-xl flex flex-col items-center shadow-md group-hover:shadow-xl group-hover:shadow-gray-500 shadow-gray-900 transition-all">
        <p className="mt-2 text-xl font-semibold text-white">
          {product.title.slice(0, 12)}
        </p>
        <div className="flex items-center justify-between w-full px-4 mt-4 mb-4 ">
          <div className="flex flex-col items-center">
            <p className="text-base text-gray-200">Price</p>
            <p className="text-lg text-white">{`Rs. ${product.price}`}</p>
          </div>
          <div className="bg-blue-600 h-[2.6rem] w-[2.6rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-cyan-600   transition-all duration-250">
            {toggle ? (
              <AiFillHeart
                className="text-2xl text-red-400"
                onClick={cartHandler}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl text-white"
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
