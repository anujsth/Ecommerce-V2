import "../assets/styles/style.css";
import logo from "../assets/images/logo.png";
import { BsFillBagHeartFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { stateLoggedFalse } from "../Redux/features/authenticationSlice";

const Nav = ({ scrolled, mainUrl, welcomeText }) => {
  const { loggedIn } = useSelector((state) => state.authentication);
  const { itemQuantity } = useSelector((state) => state.cart);
  const { wishItems } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstWord = welcomeText?.slice(0, 1);
  const finalName = firstWord?.toUpperCase() + welcomeText?.slice(1);
  return (
    <div
      className={`flex ${
        scrolled ? "bg-black" : "bg-transparent"
      } justify-between items-center z-1 ${
        scrolled ? "sticky" : ""
      } top-0 px-[3rem]`}
    >
      <div className="flex h-full justify-center items-center">
        <div className="px-[0.5rem] py-[1.5rem] md:px-[1rem] md:py-[2rem] bg-blue-400">
          <Link to="/">
            <img src={logo} className="h-[4rem] w-[3rem] object-cover" alt="" />
          </Link>
        </div>
        <Link to="/">
          <p
            className={`${
              mainUrl ? "text-white" : "text-black"
            } font-semibold  ml-8 text-lg cursor-pointer hidden md:block`}
          >
            Home
          </p>
        </Link>
      </div>
      <div className="flex items-center">
        {loggedIn && welcomeText && (
          <p className="text-white mr-6 hidden md:visible font-medium md:flex justify-center items-center">
            Welcome <span className="text-blue-500 ml-2">{finalName}</span>
          </p>
        )}
        {loggedIn ? (
          <Link
            className={`${
              mainUrl ? "text-white border-white" : "text-black border-black"
            } border rounded px-2 border-white md:text-base cursor-pointer text-center hover:border-red-600 hover:text-red-600 hover:scale-105 transition-all`}
            onClick={() => {
              navigate("/signin");
              dispatch(stateLoggedFalse());
            }}
          >
            LOG OUT
          </Link>
        ) : (
          <Link
            to="/signin"
            className={`${
              mainUrl ? "text-white border-white" : "text-black border-black"
            } border rounded px-2 border-white md:text-base cursor-pointer text-center hover:border-green-600 hover:text-green-600 hover:scale-105 transition-all`}
          >
            LOG IN
          </Link>
        )}
        <Link to="/wishlist">
          <div className="relative">
            <BsFillBagHeartFill
              className={`${
                mainUrl ? "text-white" : "text-black"
              } text-2xl ml-8 cursor-pointer hover:scale-105 hover:text-green-600 transition-all`}
            />
            <div className="absolute top-0 right-0 -mt-3 -mr-4">
              <span className="bg-red-400 text-white px-[0.4rem]  text-sm rounded-full">
                {wishItems.length}
              </span>
            </div>
          </div>
        </Link>

        <Link className="relative" to="/cart">
          <AiOutlineShoppingCart
            className={`${
              mainUrl ? "text-white" : "text-black"
            } text-2xl ml-8 cursor-pointer hover:scale-105 hover:text-blue-400 transition-all`}
          />
          <div class="absolute top-0 right-0 -mt-3 -mr-4">
            <span
              class={`bg-blue-400 text-white px-[0.4rem]  text-sm rounded-full`}
            >
              {itemQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
