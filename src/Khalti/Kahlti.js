import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import khalti from "../assets/images/khalti.png";

const Kahlti = ({ total }) => {
  let checkout = new KhaltiCheckout(config);
  console.log(total);
  return (
    <div
      onClick={() => {
        total !== 0
          ? checkout.show({ amount: (total * 100).toFixed() })
          : alert("Your cart is empty");
      }}
    >
      <img
        src={khalti}
        className="h-[6rem] w-[14rem] lg:h-[9rem] lg:w-[18rem] hover:scale-110 transition-all cursor-pointer"
      />
    </div>
  );
};

export default Kahlti;
