import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import WishListItem from "../components/WishListItem";
import { FaSkullCrossbones } from "react-icons/fa";
import Footer from "../components/Footer";

const WishList = () => {
  const { wishItems } = useSelector((state) => state.wishList);
  return (
    <div>
      <Nav />
      <div className="w-[full] mt-12 flex flex-col items-center justify-center pb-[20rem]">
        <p className="text-4xl font-medium text-blue-600">WISH LIST</p>
        <div className="md:mt-16 w-full md:w-[60%] ">
          {wishItems.length === 0 ? (
            <div className="flex justify-center items-center mt-16">
              <FaSkullCrossbones className="text-red-500 text-4xl mr-4" />
              <p className="text-red-500 text-4xl">Wish List is Empty</p>
            </div>
          ) : (
            wishItems.map((item) => {
              return <WishListItem product={item} />;
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
