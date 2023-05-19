import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    products: null,
  },
  reducers: {
    fetchAllData: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    },
  },
});

export default productDetailSlice.reducer;
export const { fetchAllData } = productDetailSlice.actions;
