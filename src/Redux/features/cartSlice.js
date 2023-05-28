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

      if (!state.val) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );

        state.cartItems[itemIndex].quantity += action.payload.quantity;
      }
    },

    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
      state.itemQuantity += state.cartQuantity;
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
    resetCart: (state, action) => {
      state.itemQuantity = 0;
      state.cartItems = [];
      state.cartQuantity = 0;
      state.totalCostCart = "";
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
  resetCart,
} = cartSlice.actions;
