import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishItems: [],
  },
  reducers: {
    setWishItems: (state, action) => {
      state.wishItems = [...state.wishItems, action.payload];
      console.log(state.wishItems);
    },
    removeWishItems: (state, action) => {
      state.wishItems = state.wishItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      console.log(state.wishItems);
    },
  },
});

export const { setWishItems, removeItems, removeWishItems } =
  wishListSlice.actions;
export default wishListSlice.reducer;
