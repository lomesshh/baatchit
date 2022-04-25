const { createSlice } = require("@reduxjs/toolkit");

const userdata = JSON.parse(localStorage.getItem("socialUser"));
const usertoken = localStorage.getItem("socialToken");

const initialState = {
  user: userdata ? userdata : {},
  token: usertoken ? usertoken : "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userLogout(state) {
      state.user = {};
      state.token = "";
      localStorage.removeItem("socialUser");
      localStorage.removeItem("socialToken");
    },
  },
});

export const { userLogin, userLogout } = AuthSlice.actions;

export default AuthSlice;
