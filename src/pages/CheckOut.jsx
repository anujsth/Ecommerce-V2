import { useSelector } from "react-redux";
import Nav from "components/Nav";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ItemDetail from "components/ItemDetail";
import Footer from "components/Footer";
import { RiCoupon2Line, RiH1 } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { useState } from "react";
import Popup from "components/Popup";
import "assets/styles/modal.css";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.shipment);
  const { username } = useSelector((state) => state.authentication);
  const { cartItems, totalCostCart } = useSelector((state) => state.cart);
  const [modal, setModal] = useState(false);
  console.log(detail);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && <Popup toggleModal={toggleModal} />}
      <Nav />
      <div className="flex flex-col md:flex-row md:mx-[8rem] mt-8 ">
        <div className="flex flex-col w-full md:w-[55%]">
          <div className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-lg">
            <p className="text-lg">Deliver to {username},</p>
            {detail === null ? (
              <div
                onClick={toggleModal}
                className="flex text-xl mx-auto items-center hover:cursor-pointer mt-6 mb-6"
              >
                <AiOutlinePlusCircle className="text-3xl mr-2" />
                <p>Add Address Details</p>
              </div>
            ) : (
              <div className="flex flex-col mt-2">
                <div className="flex">
                  <p className="border-r-2 text-sm border-gray-300 pr-3">
                    {detail.phone}
                  </p>
                  <p className="pl-3 text-sm text-red-700">
                    {detail.address}, {detail.city}, {detail.province}{" "}
                    {detail.landmark ? `- ${detail.landmark}` : ""}
                  </p>
                  <button
                    className="pl-3 text-sm text-blue-800 underline"
                    onClick={toggleModal}
                  >
                    Change
                  </button>
                </div>
                <div className="border border-gray-300 mt-4 p-2 rounded-lg text-xs">
                  <p className="text-green-600 mb-2">
                    Collect your parcel from the nearest Kingsmen Pick-up Point
                    with a reduced shipping fee (Pre-Payment Only)
                  </p>
                  <p>suggested collection point(s) </p>
                </div>
                <div className="flex mt-3 text-sm">
                  <p className="mr-2">Email to {detail.email}</p>
                  <button className="text-blue-500 " onClick={toggleModal}>
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col border border-gray-200 rounded-lg p-4 shadow-lg mt-8 mb-12">
            <p className="text-center mb-6 text-xl text-blue-600">
              Ordered Products
            </p>

            {cartItems.map((item) => {
              return (
                <div className="flex mb-6" key={item.id}>
                  <ItemDetail product={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:ml-3 flex flex-col md:w-[40%] p-6  border border-gray-200 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col pb-8 border-b-2 border-gray-300">
            <p className="text-xl">Discound and Payment</p>
            <div className="flex justify-between mt-4 text-base">
              <div className="flex items-center">
                <RiCoupon2Line className="text-blue-700 mr-4 text-lg" />{" "}
                <p>Kingsmen Voucher</p>{" "}
              </div>
              <p>No Applicable Voucher</p>
            </div>
            <div className="flex justify-between mt-4 text-base">
              <div className="flex items-center">
                <TbDiscount2 className="text-blue-700 text-xl mr-4" />{" "}
                <p>Kingsmen Discount</p>{" "}
              </div>
              <p>Unavailabe Coupans</p>
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-y-2 mb-5">
            <p className=" text-lg font-semibold mb-3">Order Sumamry</p>
            <div className="flex justify-between">
              <p className="text-gray-700 text-base font-semibold">
                Items Total
              </p>
              <p className="text-gray-700 text-base font-semibold">
                Rs. {totalCostCart.toFixed(3)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 text-base font-semibold">
                Delivery Fee
              </p>
              <p className="text-gray-700 text-base font-semibold">Rs. 65</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 text-base font-semibold">
                Total Payment
              </p>
              <p className="text-gray-700 text-base font-semibold">
                Rs. {(totalCostCart + 65).toFixed(3)}
              </p>
            </div>
            <p className="text-end text-gray-600">All taxes included</p>
          </div>
          {detail !== null && (
            <div
              onClick={() => {
                const val = totalCostCart + 65;
                navigate("/payment", { state: val });
              }}
              className="cursor-pointer m-auto w-full rounded bg-blue-900 py-2.5"
            >
              <p className="text-center text-xl text-white">CHECK OUT</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
