import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    username: "",
    userPassword: "",
    loggedIn: false,
    error: null,
  },
  reducers: {
    setUserAuth: (state, action) => {
      state.username = action.payload.username;
      state.userPassword = action.payload.userPassword;
    },
    setLoggedTrue: (state) => {
      const values = JSON.parse(localStorage.getItem("users"));
      const matchingUser = values?.find(
        (item) =>
          item.userName === state.username &&
          item.password === state.userPassword
      );
      if (matchingUser) {
        state.loggedIn = true;
        state.error = null; // Reset error if a matching user is found
      } else {
        state.loggedIn = false;
        state.error = "User Not Found";
      }
    },
    stateLoggedFalse: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { setUserAuth, setLoggedTrue, stateLoggedFalse } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
