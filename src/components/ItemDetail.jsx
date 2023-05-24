const ItemDetail = ({ product }) => {
  return (
    <>
      {" "}
      <div className="w-[35%] md:w-[40%] flex flex-col lg:flex-row justify-start m-auto">
        <img
          src={product.image}
          alt=""
          className="h-full w-16 mr-3 object-contain"
        />
        <div className="flex flex-col pt-4 lg:pt-0">
          <p>{product.title}</p>
          <p className="text-red-500">{product.category}</p>
        </div>
      </div>
      <div className=" w-[16%] m-auto">
        <p className="text-center">{product.quantity}</p>
      </div>
      <div className="w-[16%] m-auto">
        <p className="text-center">Rs. {product.cost}</p>
      </div>
      <div className="w-[16%] m-auto">
        <p className="text-center">Rs. {product.quantity * product.cost}</p>
      </div>
    </>
  );
};

export default ItemDetail;
