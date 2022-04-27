const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  anyUser: {},
  allUsers: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    getUserData(state, action) {
      state.anyUser = action.payload;
    },
  },
});

export const { getAllUsers, getUserData } = UserSlice.actions;

export default UserSlice;
