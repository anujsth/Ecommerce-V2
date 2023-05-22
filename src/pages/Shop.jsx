import { useNavigate } from "react-router-dom";
import "../assets/styles/style.css";
import Card from "../components/Card";
import CardShimmer from "../components/CardShimmer";

const Shop = ({ products, category, loading }) => {
  const navigate = useNavigate();
  const items = products?.filter((item) => {
    return item.category === category;
  });
  const clickHandler = (arg) => {
    navigate(`/product/${arg}`);
  };
  return (
    <>
      <div className="w-[100%] mt-12 flex flex-col items-center mx-0 mb-6">
        <h1 className="text-black text-4xl font-bold pb-2 relative shadow-2xl">
          <span className="category ">{category.toUpperCase()}</span>
        </h1>

        {loading ? (
          <div className="mt-16 flex flex-wrap w-[90%] justify-around lg:justify-start lg:gap-x-24 xl:gap-x-16 lg:ml-16">
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </div>
        ) : (
          <div className="mt-16 flex flex-wrap w-[90%] justify-around lg:justify-start lg:gap-x-24 xl:gap-x-16 lg:ml-16">
            {items?.map((item) => {
              return (
                <Card product={item} key={item.id} onClick={clickHandler} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
