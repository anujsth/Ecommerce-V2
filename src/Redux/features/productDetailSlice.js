import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    products: null,
    selectedCategory: null,
  },
  reducers: {
    fetchAllData: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      console.log(state.selectedCategory);
    },
  },
});

export default productDetailSlice.reducer;
export const { fetchAllData, setSelectedCategory } = productDetailSlice.actions;
