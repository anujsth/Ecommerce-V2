import { resetCart } from "Redux/features/cartSlice";
import Nav from "components/Nav";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cod = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetCart());
  };
  return (
    <>
      <Nav />
      <div className="w-full flex flex-col md:flex-row justify-center mt-20 items-center ">
        <TbTruckDelivery className="text-7xl md:text-8xl text-blue-800" />
        <div className="border-gray-500 border-dashed border-b-4 p-5">
          <p className="text-4xl md:text-5xl">Package Is On Your Way</p>
        </div>
      </div>
      <Link
        onClick={handleReset}
        to="/"
        className="w-full flex justify-center items-center mt-8 text-lg hover:text-green-700 transition-all"
      >
        <AiOutlineArrowLeft />
        <p>Go Back To Homepage</p>
      </Link>
    </>
  );
};

export default Cod;
