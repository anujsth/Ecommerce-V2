import { useNavigate } from "react-router-dom";
import "../assets/styles/style.css";
import Card from "../components/Card";
import CardShimmer from "../components/CardShimmer";

const Shop = ({ products, category, loading, search }) => {
  const navigate = useNavigate();
  const items = products?.filter((item) => {
    return item.category === category;
  });

  const clickHandler = (arg) => {
    navigate(`/product/${arg}`);
  };
  return (
    <>
      {!search ||
      (search &&
        items?.find((item) => item.title.toLowerCase().includes(search))) ? (
        <div className="w-[100%] mt-12 flex flex-col items-center mx-0 mb-6 z-0">
          <h1 className="text-black text-4xl font-bold pb-2  ">
            <span>{category.toUpperCase()}</span>
          </h1>

          {loading ? (
            <div className="mt-16 flex flex-wrap w-[90%] justify-around lg:justify-start lg:gap-x-24 xl:gap-x-16 lg:ml-16">
              <CardShimmer />
              <CardShimmer />
              <CardShimmer />
              <CardShimmer />
            </div>
          ) : (
            <div className="mt-16 flex flex-wrap w-[90%] justify-around lg:justify-start lg:gap-x-24 xl:gap-x-16 lg:ml-24">
              {search
                ? items?.map((item) => {
                    if (item.title.toLowerCase().includes(search)) {
                      return (
                        <Card
                          product={item}
                          key={item.id}
                          onClick={clickHandler}
                        />
                      );
                    }
                  })
                : items?.map((item) => {
                    return (
                      <Card
                        product={item}
                        key={item.id}
                        onClick={clickHandler}
                      />
                    );
                  })}
            </div>
          )}
        </div>
      ) : (
        <div className="w-[100%] mt-12 flex flex-col items-center mx-0 mb-6">
          <h1 className="text-black text-4xl font-bold pb-2 relative">
            <span>{category.toUpperCase()}</span>
          </h1>

          <p className="text-red-500">Items Not Found</p>
        </div>
      )}
    </>
  );
};

export default Shop;
