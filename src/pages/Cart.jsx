import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { setTotalCostCart } from "../Redux/features/cartSlice";
import emailjs from "@emailjs/browser";
import Kahlti from "../Khalti/Kahlti";
import { FaSkullCrossbones } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState([]);
  const { cartItems, itemQuantity } = useSelector((state) => state.cart);
  //   const [val, setVal] = useState(0);
  const { totalCostCart } = useSelector((state) => state.cart);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_9anhvxk", e.target, "jIXX3VW0Eim970WsA")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  useEffect(() => {
    let sum = 0;
    totalCost !== [] &&
      totalCost.forEach((item) => {
        sum += item;
      });
    dispatch(setTotalCostCart(sum));
  }, [totalCost]);
  return (
    <div className="h-[100%] w-full flex flex-col md:flex-row">
      <div className="md:w-[60%] h-[80%] mx-[2rem]  mt-[5rem] md:ml-[7rem] md:pr-16 ">
        <div className="flex justify-between border-b-2 pb-8 border-gray-400">
          <p className="text-2xl md:text-3xl font-medium">Shopping Cart</p>
          <p className="text-2xl md:text-3xl font-medium">
            {itemQuantity} Items
          </p>
        </div>
        <div className="mt-8">
          <div className="flex ">
            <p className="text-gray-500 w-[40%]">PRODUCT DETAILS</p>
            <p className="text-gray-500 w-[16%]">QUANTITY</p>
            <p className="text-gray-500 w-[16%]">PRICE</p>
            <p className="text-gray-500 w-[16%]">TOTAL</p>
          </div>
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center mt-16">
              <FaSkullCrossbones className="text-red-500 text-4xl mr-4" />
              <p className="text-red-500 text-4xl">Cart is Empty</p>
            </div>
          ) : (
            cartItems.map((items) => {
              return (
                <CartItem
                  product={items}
                  setTotalCost={setTotalCost}
                  key={items.id}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="h-[100vh] md:w-[40%] mt-6 md:mt-0 bg-red-800">
        <div className="flex flex-col mx-12 mt-20 border-gray-500 border-b-2 pb-8">
          <div className="border-gray-500 border-b-2 pb-8">
            <p className="text-3xl text-white text-medium">ORDER SUMMARY</p>
          </div>
          <div className="flex mt-6 justify-between text-2xl ">
            <p className="text-white">Total Items </p>
            <p className="text-blue-300">{itemQuantity}</p>
          </div>
          <div className="mt-12">
            <p className="text-2xl text-green-400">PROMO CODE</p>
            <input
              type="text"
              placeholder="Enter Your Code ;)"
              className="border-none bg-white mt-4 py-2 px-4 w-[60%] m-auto"
            />
          </div>
          <button className="mt-4 bg-blue-600 text-white w-[6rem] rounded py-2">
            Apply
          </button>
        </div>
        <div className="mt-8 mx-12 flex justify-between">
          <p className="text-2xl text-white">Total Cost </p>
          <p className="text-2xl text-blue-300">
            Rs. {totalCostCart && totalCostCart.toFixed(2)}
          </p>
        </div>
        {cartItems.length !== 0 && <Kahlti total={totalCost && totalCost} />}
      </div>
    </div>
  );
};

export default Cart;
