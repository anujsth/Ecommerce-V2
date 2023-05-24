import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col py-6 px-16 bg-[#152238] h-full">
      <div className="flex items-start justify-evenly flex-col md:flex-row pb-12 md:pb-20  border-b-2">
        <div className="flex items-center md:w-[25%]">
          <img src={logo} alt="" className="font-mono h-[5rem] w-[5rem]" />
          <p className="text-3xl text-white">KINGSMEN</p>
        </div>
        <div className="flex flex-col gap-y-2 md:w-[18%]">
          <p className="text-white text-2xl mt-4 mb-4">MENU</p>
          <Link to="/" className="text-white text-sm">
            HOME
          </Link>
          <Link to="/wishlist" className="text-white text-sm">
            WISH LIST
          </Link>
          <Link to="/cart" className="text-white text-sm">
            CART
          </Link>
          <Link to="/signin" className="text-white text-sm">
            LOGIN
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 md:w-[18%]">
          <p className="text-white text-2xl  mt-4 mb-4">COMPANY</p>
          <p to="/" className="text-white text-sm">
            STRATEGIC PARTNERS
          </p>
          <p to="/wishlist" className="text-white text-sm">
            CAREERS
          </p>
          <p to="/cart" className="text-white text-sm">
            PRIVACY POLICY
          </p>
          <p to="/signin" className="text-white text-sm">
            TERMS & CONDITIONS
          </p>
        </div>
        <div className="flex flex-col gap-y-2 md:w-[18%]">
          <p className="text-white text-2xl  mt-4 mb-4">CONTACT</p>
          <p className="text-white text-sm">CONTACT SALES</p>
          <p to="/wishlist" className="text-sm text-orange-600">
            GET THE QUOTE
          </p>
          <p className="text-white">+44 204 577 00 77</p>
          <p className="text-sm text-orange-600">BOOK A DEMO</p>
        </div>
        <div className="flex flex-col gap-y-2 md:w-[18%]">
          <p className="text-white text-2xl  mt-4 mb-4">TECH SUPPORT</p>
          <p className="text-white text-sm">CONTACT SUPPORT</p>
          <p to="/wishlist" className="text-sm text-orange-600">
            ACTIVATE
          </p>

          <p className="text-sm text-orange-600">INSTALLATION GUIDES</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-white pt-8 mb-8">
        <p className="text-lg mb-8">KINGSMEN Copyright 2012</p>
        <div className="flex text-3xl gap-x-4">
          <FaGooglePlus />
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Footer;
