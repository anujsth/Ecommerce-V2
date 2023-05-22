import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setCartQuantity, setItemCart } from "../Redux/features/cartSlice";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [itemNumber, setItemNumber] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.productDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const productItem = products?.find((item) => {
      return item.id === Number(id);
    });
    setProduct(productItem);
  }, [products]);
  useEffect(() => {
    const val = cartItems.find((item) => {
      return item?.id === product?.id;
    });
    console.log(val);
    val && setItemNumber(val?.quantity);
  }, [product]);
  const clickHandler = (product, itemNumber) => {
    dispatch(
      setItemCart({
        id: product.id,
        title: product.title,
        cost: product.price,
        category: product.category,
        image: product.image,
        quantity: itemNumber,
      })
    );
    dispatch(setCartQuantity(itemNumber));
    toast.success(`😄 ${itemNumber} Product Added To Cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <Nav />
      <ProductItem
        product={product}
        itemNumber={itemNumber}
        setItemNumber={setItemNumber}
        onClickHandler={clickHandler}
      />
      <ToastContainer />
    </>
  );
};

export default Product;
