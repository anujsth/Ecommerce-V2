import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCartQuantity,
  setItemCart,
  setItemQuantity,
} from "../Redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const navigate = useNavigate();
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
