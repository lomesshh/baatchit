const { configureStore } = require("@reduxjs/toolkit");
import AuthSlice from "./Slices/AuthSlice";
import PostSlice from "./Slices/PostSlice";
import UserSlice from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    post: PostSlice.reducer,
    auth: AuthSlice.reducer,
    user: UserSlice.reducer,
  },
});
