import { FaStar } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductItem = ({
  product,
  itemNumber,
  setItemNumber,
  onClickHandler,
  loggedIn,
}) => {
  return (
    product !== null && (
      <div className="flex flex-col items-center md:flex-row mt-[1.5rem] md:mt-[3rem] mx-auto w-[100%] md:w-[75%] mb-[2rem]">
        <div className="w-[50%] md:w-[40%] md:h-[25rem] ">
          <img
            src={product?.image}
            alt=""
            className="object-contain h-full"
            width={"100%"}
          />
        </div>
        <div className="w-[70%] md:w-[55%] mt-8 md:mt-12 h-full md:ml-[3rem] flex flex-col">
          <p className="text-xl font-semibold lg:text-5xl text-">
            {product?.title}
          </p>
          <div className="w-[30%] mt-6 flex items-center text-xl text-black">
            <div className="flex items-center">
              <FaStar className="mr-2" /> {product?.rating?.rate}
            </div>

            <div className="flex items-center">
              <BsPersonCheckFill className="ml-8 mr-2" />{" "}
              {product?.rating?.count}
            </div>
          </div>
          <div className="mt-4 w-full md:w-[80%] ">{product?.description}</div>
          <div className="flex flex-col mt-16">
            <p className="text-xl font-semibold ">Quantity</p>
            <div className="flex items-center mt-4">
              <div className="border border-gray-600 rounded-lg cursor-pointer">
                <AiOutlineMinus
                  className="text-3xl"
                  onClick={() => {
                    if (itemNumber > 1) {
                      let val = itemNumber - 1;
                      setItemNumber(val);
                    }
                  }}
                />
              </div>
              <p className="mx-4 text-3xl">{itemNumber}</p>
              <div className="border border-gray-600 rounded-lg ">
                <AiOutlinePlus
                  className="text-3xl cursor-pointer"
                  onClick={() => {
                    setItemNumber((itemNumber += 1));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-12 pb-12 flex w-full justify-start">
            {
              <Link
                to={`${loggedIn ? "/cart" : "/signin"}`}
                className=" w-[7rem] h-[2.5rem] rounded-3xl cursor-pointer bg-blue-800 flex items-center justify-center hover:bg-blue-900"
              >
                <p className="font-semibold text-center text-white">Buy Now</p>
              </Link>
            }
            <div className="w-[10rem] h-[2.5rem] ml-1 mr-3 rounded-3xl cursor-pointer bg-green-800 flex items-center justify-center hover:bg-green-900">
              <p
                className="font-semibold text-center text-white"
                onClick={() => onClickHandler(product, itemNumber)}
              >
                Add to cart
              </p>
            </div>
            <div className="md:ml-4 w-[5rem] h-[2.5rem] rounded-3xl cursor-pointer border border-black bg-transparent flex items-center justify-center">
              <p className="font-semibold text-black">${product?.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductItem;
