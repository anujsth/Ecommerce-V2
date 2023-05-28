import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "../Axios";
import {
  fetchAllData,
  setSelectedCategory,
} from "../Redux/features/productDetailSlice";
import "../assets/styles/style.css";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import Nav from "../components/Nav";
import Shop from "./Shop";

const Main = () => {
  const shopRef = useRef();
  const mainUrl = window.location.href;
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const { products, selectedCategory } = useSelector(
    (state) => state.productDetail
  );
  const [loading, setLoading] = useState(false);
  const { username } = useSelector((state) => state.authentication);
  const [search, setSearch] = useState(null);
  const [categorySelect, setCategorySelect] = useState(
    selectedCategory ? selectedCategory : ""
  );
  const [navbarHeight, setNavbarHeight] = useState(null);
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

    const containerRect = container.getBoundingClientRect();
    const scrollOffset = containerRect.top - navbarHeight;

    if (container) {
      window.scrollTo({
        top: window.pageYOffset + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = shopRef.current;

    if (selectedCategory) {
      container.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(setSelectedCategory(null));
  }, []);

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
      <Nav
        setNavbarHeight={setNavbarHeight}
        scrolled={isScrolled}
        mainUrl={mainUrl}
        welcomeText={username}
        handleCategory={handleCategory}
      />
      <div className="w-full main-page">
        <div className="w-full">
          <LandingPage scrollFunc={handleClick} />
        </div>
      </div>
      <div ref={shopRef}>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <select
            className="ml-8 md:ml-28 mt-8 font-semibold focus:text text-xl cursor-pointer text-black bg-transparent"
            onChange={handleCategory}
            defaultValue={selectedCategory ? selectedCategory : ""}
          >
            <option value="">All Products</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>

          <div>
            <input
              type="text"
              className="mr-20 w-[12rem] mt-8 ml-20 md:ml-0 border rounded px-4 py-1"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        {(categorySelect === "men's clothing" || categorySelect === "") && (
          <Shop
            products={products}
            category="men's clothing"
            loading={loading}
            search={search}
          />
        )}
        {(categorySelect === "jewelery" || categorySelect === "") && (
          <Shop
            products={products}
            category="jewelery"
            loading={loading}
            search={search}
          />
        )}
        {(categorySelect === "electronics" || categorySelect === "") && (
          <Shop
            products={products}
            category="electronics"
            loading={loading}
            search={search}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Main;
