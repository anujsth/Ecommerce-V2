import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = ({ product, setTotalCost }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalCost((prevState) => {
      return [...prevState, product.quantity * product.cost];
    });
  }, [product]);
  return (
    <div className="flex  mt-10">
      <div className="w-[40%]  flex items-center">
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
      <div className="w-[16%] m-auto">${product.cost}</div>
      <div className="w-[16%] m-auto">${product.quantity * product.cost}</div>
      <div className="w-[5rem] md:w-[8%] m-auto bg-red-500 text-white rounded-lg py-1 cursor-pointer hover:scale-105">
        <p
          className="font-semibold text-center"
          onClick={() => {
            dispatch(removeCartItem(product));
            toast.warn(`😔 Product Removed From Cart`, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          Delete
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartItem;
