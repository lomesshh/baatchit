const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allPosts: [],
  loader: false,
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.allPosts = action.payload;
    },
    toggleLoader(state, action) {
      state.loader = action.payload;
    },
  },
});

export const { getPosts, toggleLoader } = PostSlice.actions;

export default PostSlice;
