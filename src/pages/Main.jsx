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
  const [categorySelect, setCategorySelect] = useState("");

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

  const handleCategory = (e) => {
    setCategorySelect(e.target.value);
  };

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
        <select
          className="ml-16 md:ml-28 mt-8 font-semibold focus:text text-xl cursor-pointer text-black bg-transparent"
          onChange={handleCategory}
        >
          <option value="">Category</option>
          <option value="">All Products</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        {(categorySelect === "men's clothing" || categorySelect === "") && (
          <Shop
            products={products}
            category="men's clothing"
            loading={loading}
          />
        )}
        {(categorySelect === "jewelery" || categorySelect === "") && (
          <Shop products={products} category="jewelery" loading={loading} />
        )}
        {(categorySelect === "electronics" || categorySelect === "") && (
          <Shop products={products} category="electronics" loading={loading} />
        )}
      </div>
    </>
  );
};

export default Main;
