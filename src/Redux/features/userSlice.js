import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userEmail: "",
    userName: "",
    password: "",
  },
  reducers: {
    setUserDetail: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    storeDetail: (state) => {
      const val = JSON.parse(localStorage.getItem("users")) || [];
      let detail = [...val, state];
      localStorage.setItem("users", JSON.stringify(detail));
    },
  },
});

export const { setUserDetail, storeDetail } = userSlice.actions;
export default userSlice.reducer;
