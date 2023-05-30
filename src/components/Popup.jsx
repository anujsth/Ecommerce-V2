import "../assets/styles/modal.css";
import { province } from "../assets/AddressDetail/addressDetail";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShipmentDetail } from "../Redux/features/ShipmentSlice";

const Popup = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const detailOrder = useSelector((state) => state.shipment.detail);
  const [selectInfo, setSelectInfo] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [detail, setDetail] = useState({
    phone: detailOrder ? detailOrder.phone : "",
    email: detailOrder ? detailOrder.email : "",
    province: "",
    address: detailOrder ? detailOrder.address : "",
    city: detailOrder ? detailOrder.city : "",
    landmark: detailOrder ? detailOrder.landmark : "",
  });
  console.log(detailOrder);
  const handleDetail = (e) => {
    setDetail((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    toggleModal();
    dispatch(setShipmentDetail(detail));
  };

  const selectHandler = (e) => {
    setSelectInfo(e.target.value);
    setSelectedProvince(
      province.provinces.find((item) => {
        if (item.name === e.target.value) {
          return item;
        }
      })
    );
  };

  return (
    <div className="'modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content top-[50%] xl:top-[40%]  left-[50%] 2xl:w-[50%] ">
        <h2 className="text-lg font-mdeium text-blue-700 ">Shipment Detail</h2>
        <button className="close-modal text-lg" onClick={toggleModal}>
          X
        </button>

        <form
          onSubmit={submitHandler}
          className="w-full mt-3 flex flex-col xl:flex-row justify-between"
        >
          <div className="flex flex-col mr-2 gap-y-1">
            <p className="mb-2">Mobile Number</p>
            <input
              type="tel"
              defaultValue={
                detailOrder?.phone ? detailOrder?.phone : detail.phone
              }
              onChange={handleDetail}
              placeholder="Enter your number"
              required
              name="phone"
              className="bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400"
            />
            <p className="mb-2">Province</p>
            <select
              className="bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400"
              name="province"
              required
              onChange={(e) => {
                selectHandler(e);
                handleDetail(e);
              }}
            >
              <option value="" disabled selected>
                Select Province
              </option>
              {province.provinces.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p className="mb-2">City</p>
            <select
              className={`bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400 ${
                selectInfo !== null ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              required
              name="city"
              disabled={selectInfo !== null ? false : true}
              onChange={handleDetail}
            >
              <option value="" disabled selected>
                Select City
              </option>
              {selectedProvince?.districts?.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="mb-2">Email Address</p>
            <input
              type="text"
              required
              defaultValue={
                detailOrder?.email ? detailOrder?.email : detail.email
              }
              onChange={handleDetail}
              name="email"
              placeholder="Enter your Email"
              className="bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400"
            />
            <p className="mb-2">Address</p>
            <input
              type="text"
              placeholder="Enter your Address"
              required
              name="address"
              defaultValue={
                detailOrder?.address ? detailOrder?.address : detail.address
              }
              onChange={handleDetail}
              className="bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400"
            />
            <p className="mb-2">LandMark (Optional)</p>
            <input
              type="text"
              name="landmark"
              defaultValue={
                detailOrder?.landmark ? detailOrder?.landmark : detail.landmark
              }
              onChange={handleDetail}
              placeholder="Nearby Landmark"
              className="bg-transparent w-[25rem] py-2 px-4 border rounded border-gray-400"
            />
            <div className="w-full flex justify-end mt-3">
              <button
                type="submit"
                value="submit"
                className="text-end px-6 py-2 rounded-md bg-blue-800 text-white"
              >
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
