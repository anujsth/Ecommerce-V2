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
import { ImCross } from "react-icons/im";
import axios from "axios";

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
  const [suggestionToggle, setSuggestionToggle] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(null);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () =>
        Axios.get("").then((res) => {
          dispatch(fetchAllData(res.data));
          setLoading(false);
        }),
      500
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

  useEffect(() => {
    const getData = setTimeout(() => {
      Axios.get("").then(({ data }) => {
        setSearchData(
          data.filter((item) => {
            if (
              item?.title?.toLowerCase().includes(search?.toLowerCase()) &&
              search !== ""
            ) {
              return item;
            }
          })
        );
      });
      setSearchData([]);
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);

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
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center ">
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
          <div className="flex justify-center mr-16 ">
            <div className="flex flex-col z-5 relative">
              <input
                type="text"
                value={search}
                className="w-[20rem] mt-8 ml-20 md:ml-0 border border-gray-400 rounded px-4 py-1 "
                placeholder="Search..."
                onChange={(e) => {
                  {
                    setSearch(e.target.value);
                    setSearchData([]);
                    setSuggestionToggle(true);
                  }
                }}
              />

              {search && suggestionToggle ? (
                <div className="z-10 absolute ml-20 md:ml-0 mt-[4.5rem] w-[20rem] bg-white border  rounded shadow-lg cursor-pointer ">
                  {searchData.map((item) => {
                    {
                      return (
                        <p
                          key={item.id}
                          className="border-b-2 hover:text-blue-600"
                          onClick={() => {
                            setSearch(item.title.toLowerCase());

                            setSuggestionToggle(false);
                          }}
                        >
                          {item.title}
                        </p>
                      );
                    }
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            {search && (
              <ImCross
                className="ml-4 mt-10 hover:cursor-pointer hover:text-red-600"
                onClick={() => {
                  setSearch("");
                }}
              />
            )}
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
