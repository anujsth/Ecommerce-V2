import { FaStar } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductItem = ({
  product,
  itemNumber,
  setItemNumber,
  onClickHandler,
}) => {
  return (
    product !== null && (
      <div className="flex flex-col items-center md:flex-row mt-[1.5rem] md:mt-[3rem] m-auto w-[100%] md:w-[75%] h-[70vh]">
        <div className="w-[50%] md:w-[40%] h-[100%]">
          <img
            src={product?.image}
            alt=""
            className="object-contain h-full"
            width={"100%"}
          />
        </div>
        <div className="w-[55%] mt-8 md:mt-12 h-full ml-[3rem] flex flex-col">
          <p className="text-xl lg:text-5xl text- font-semibold">
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
          <div className="mt-4 w-[80%] max-[700px]:hidden md:visible">
            {product?.description}
          </div>
          <div className="flex flex-col mt-16">
            <p className="text-xl font-semibold ">Quantity</p>
            <div className="mt-4 flex items-center">
              <div className="border border-gray-600 rounded-lg cursor-pointer">
                <AiOutlineMinus
                  className="text-3xl"
                  onClick={() => {
                    if (itemNumber > 0) {
                      let val = itemNumber - 1;
                      setItemNumber(val);
                    }
                  }}
                />
              </div>
              <p className="text-3xl mx-4">{itemNumber}</p>
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
          <div className="mt-12 flex  items-center max-[700]:w-full">
            <Link
              to="/cart"
              className=" w-[7rem] mr-2 h-[2.5rem] rounded-3xl cursor-pointer bg-blue-800 flex items-center justify-center hover:bg-blue-900"
            >
              <p className="text-white font-semibold text-center">Buy Now</p>
            </Link>
            <div className=" w-[10rem] h-[2.5rem] rounded-3xl cursor-pointer bg-green-800 flex items-center justify-center hover:bg-green-900">
              <p
                className="text-white font-semibold text-center"
                onClick={() => onClickHandler(product, itemNumber)}
              >
                Add to cart
              </p>
            </div>
            <div className="md:ml-4 w-[5rem] h-[2.5rem] rounded-3xl cursor-pointer border border-black bg-transparent flex items-center justify-center">
              <p className="text-black font-semibold">${product?.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductItem;
