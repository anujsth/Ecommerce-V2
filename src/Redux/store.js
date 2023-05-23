import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productDetailReducer from "./features/productDetailSlice";
import cartReducer from "./features/cartSlice";
import wishListReducer from "./features/wishListSlice";
import userReducer from "./features/userSlice";
import authenticationReducer from "./features/authenticationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["error"],
};

const persistedReducer = persistReducer(persistConfig, authenticationReducer);

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    user: userReducer,
    authentication: persistedReducer,
  },
});

export default store;
persistStore(store);
