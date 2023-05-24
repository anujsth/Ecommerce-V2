import { createSlice } from "@reduxjs/toolkit";

const ShipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    detail: null,
  },
  reducers: {
    setShipmentDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export default ShipmentSlice.reducer;
export const { setShipmentDetail } = ShipmentSlice.actions;
