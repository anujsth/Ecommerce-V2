import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setLoggedTrue,
  setUserAuth,
} from "../Redux/features/authenticationSlice";
import "../assets/styles/signIn.css";
import Button from "../components/Button";

const SignIn = () => {
  const { loggedIn, error } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInDetail, setSignInDetail] = useState({
    userameOrEmail: "",
    password: "",
  });

  const inputUserHandler = (event) => {
    setSignInDetail({
      ...signInDetail,
      userameOrEmail: `${event.target.value}`,
    });
  };
  const inputPasswordHandler = (event) => {
    setSignInDetail({ ...signInDetail, password: `${event.target.value}` });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      setUserAuth({
        username: signInDetail.userameOrEmail,
        userPassword: signInDetail.password,
      })
    );
    dispatch(setLoggedTrue());
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="relative flex flex-col items-center signinImage ">
      <div className=" bg-black bg-opacity-80 h-[41.25rem] sm:w-[30.688rem] mt-[10rem]">
        <form
          action=""
          className="flex flex-col mt-[60px] mx-[68px]"
          onSubmit={submitHandler}
        >
          <p className="text-white text-3xl mb-[1.75rem]">Sign In</p>
          <input
            type="text"
            required
            className="text-white pt-[0.6rem] mb-[1rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Username "
            onChange={inputUserHandler}
          />
          <input
            type="password"
            required
            className="text-white mb-[1.75rem] pt-[0.6rem] pb-[0.4rem] px-[1rem]  h-[3rem] bg-[#333] rounded items-center placeholder-text-gray ]"
            placeholder="Password"
            onChange={inputPasswordHandler}
          />
          <Button title="Sign In" />
          {error && <p className="text-xl text-center text-red-500">{error}</p>}
          <p className="text-[#8c8c8c] text-base mt-[4.4rem]">
            New to Shopify?
            <Link to="/signup" className="pl-1 text-lg text-white">
              Sign up Now
            </Link>
          </p>
          <p className="text-[#8c8c8c] text-sm  mt-[1rem]">
            This page is protected by Shopify reCAPTCHA to ensure you're not a
            bot.
            <a
              href="https://policies.google.com/privacy"
              className="text-[#0071eb] pl-1 hover:underline"
            >
              Learn More
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
