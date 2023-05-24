import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setCartQuantity, setItemCart } from "../Redux/features/cartSlice";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [itemNumber, setItemNumber] = useState(1);
  const { loggedIn } = useSelector((state) => state.authentication);
  const { products } = useSelector((state) => state.productDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const productItem = products?.find((item) => {
      return item.id === Number(id);
    });
    setProduct(productItem);
  }, [products]);

  const clickHandler = (product, itemNumber) => {
    if (loggedIn) {
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
    } else {
      navigate("/signin");
    }
  };
  return (
    <>
      <Nav />
      <ProductItem
        product={product}
        itemNumber={itemNumber}
        setItemNumber={setItemNumber}
        onClickHandler={clickHandler}
        loggedIn={loggedIn}
      />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Product;

// const { cartItems } = useSelector((state) => state.cart);

// useEffect(() => {
//   const val = cartItems.find((item) => {
//     return item?.id === product?.id;
//   });
//   console.log(val);
//   val && setItemNumber(val?.quantity);
// }, [product]);
