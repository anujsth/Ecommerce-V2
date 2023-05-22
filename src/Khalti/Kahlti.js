import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

const Kahlti = ({ total }) => {
  let checkout = new KhaltiCheckout(config);
  console.log(total);
  return (
    <div
      className="cursor-pointer mt-12 m-auto w-[10rem] rounded bg-blue-700 py-2.5"
      onClick={() => {
        total !== 0
          ? checkout.show({ amount: (total * 100).toFixed() })
          : alert("Your cart is empty");
      }}
    >
      <p className="text-center text-xl text-white">CHECK OUT</p>
    </div>
  );
};

export default Kahlti;
