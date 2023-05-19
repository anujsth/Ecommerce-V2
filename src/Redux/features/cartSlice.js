import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemQuantity: 0,
    cartItems: [],
    cartQuantity: 0,
    val: "",
    totalCostCart: "",
  },
  reducers: {
    setItemQuantity: (state, action) => {
      state.itemQuantity += action.payload;
    },
    setItemCart: (state, action) => {
      state.val = state.cartItems.find((item) => item.id === action.payload.id);

      if (!state.val) state.cartItems = [...state.cartItems, action.payload];
      if (state.val) {
        console.log(state.currentItem);
      }
    },
    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
      if (!state.val) state.itemQuantity += state.cartQuantity;
    },
    removeCartItem: (state, action) => {
      state.itemQuantity -= action.payload.quantity;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.totalCostCart -= action.payload.quantity * action.payload.cost;
    },
    setTotalCostCart: (state, action) => {
      console.log(state.totalCostCart);
      state.totalCostCart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const {
  setItemQuantity,
  setItemCart,
  setCartQuantity,
  removeCartItem,
  setTotalCostCart,
} = cartSlice.actions;
