import Nav from "components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import cod from "../assets/images/cod.jpg";
import Kahlti from "Khalti/Kahlti";

const Payment = () => {
  const location = useLocation();
  const cost = location.state;
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <p className="text-3xl md:text-4xl lg:text-5xl text-center mt-5 ">
        {" "}
        Payment Method
      </p>
      <div className="flex flex-col lg:flex-row mt-12 gap-y-16 lg:gap-y-0 lg:mx-[15rem]">
        <div className="flex flex-col m-auto" onClick={() => navigate("/cod")}>
          <img
            src={cod}
            alt=""
            className="h-[12rem] w-[12rem] lg:h-[15rem] lg:w-[15rem] hover:scale-110 transition-all cursor-pointer"
          />
        </div>
        <div className="flex flex-col m-auto lg:mt-0">
          <Kahlti total={cost} />
        </div>
      </div>
    </>
  );
};

export default Payment;
