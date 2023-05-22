import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "../Axios";
import { fetchAllData } from "../Redux/features/productDetailSlice";
import "../assets/styles/style.css";
import LandingPage from "../components/LandingPage";
import Nav from "../components/Nav";
import Shop from "./Shop";

const Main = () => {
  const shopRef = useRef();
  const mainUrl = window.location.href;
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const { products } = useSelector((state) => state.productDetail);
  const [loading, setLoading] = useState(false);
  const { username } = useSelector((state) => state.authentication);

  useEffect(() => {
    setLoading(true);
    setTimeout(
      () =>
        Axios.get("").then((res) => {
          dispatch(fetchAllData(res.data));
          setLoading(false);
        }),
      1000
    );
  }, []);

  const handleClick = () => {
    const container = shopRef.current;
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
    console.log("hello");
  };

  useEffect(() => {
    const handleScroll = () => {
      let offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-full main-page">
        <Nav scrolled={isScrolled} mainUrl={mainUrl} welcomeText={username} />
        <div className="h-[100vh] w-full">
          <LandingPage scrollFunc={handleClick} />
        </div>
      </div>
      <div ref={shopRef}>
        <Shop products={products} category="men's clothing" loading={loading} />
      </div>
      <Shop products={products} category="jewelery" loading={loading} />
      <Shop products={products} category="electronics" loading={loading} />
    </>
  );
};

export default Main;
