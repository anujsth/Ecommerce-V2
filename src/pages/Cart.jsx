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
        <div className="flex justify-between pb-8 border-b-2 border-gray-400">
          <p className="text-2xl font-medium md:text-3xl">Shopping Cart</p>
          <p className="text-2xl font-medium md:text-3xl">
            {itemQuantity} Items
          </p>
        </div>
        <div className="mt-8">
          <div className="flex ">
            <p className="text-gray-500 text-center w-[35%] lg:w-[40%] border-r-2 border-black m-auto">
              PRODUCT DETAILS
            </p>
            <p className="text-center text-gray-500 w-[5rem] lg:w-[16%] border-r-2 border-black m-auto">
              QUANTITY
            </p>
            <p className="text-center text-gray-500 w-[5rem] lg:w-[16%] border-r-2 border-black m-auto">
              PRICE
            </p>
            <p className="text-center text-gray-500 w-[5rem] lg:w-[16%] m-auto">
              TOTAL
            </p>
            <p className="w-[5rem] md:w-[12%] text-white m-auto"></p>
          </div>
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center mt-16 h-[30vh] mb-24">
              <FaSkullCrossbones className="mr-4 text-4xl text-red-500" />
              <p className="text-4xl text-red-500">Cart is Empty</p>
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
      <div className="h-[100vh] md:w-[40%] mt-6 md:mt-0 bg-[#152238]">
        <div className="flex flex-col pb-8 mx-12 mt-20 border-b-2 border-gray-500">
          <div className="pb-8 border-b-2 border-gray-500">
            <p className="text-3xl text-white text-medium">ORDER SUMMARY</p>
          </div>
          <div className="flex justify-between mt-6 text-2xl ">
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
        <div className="flex justify-between mx-12 mt-8">
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
