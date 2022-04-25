const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allPosts: [],
  usersPost: [],
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
    getAllUsersPost(state, action) {
      state.usersPost = action.payload;
    },
    createAPost(state, action) {
      state.allPosts = action.payload;
    },
    editAPost(state, action) {
      state.allPosts = action.payload;
    },
    deleteAPost(state, action) {
      state.allPosts = action.payload;
    },
  },
});

export const {
  getPosts,
  toggleLoader,
  getAllUsersPost,
  createAPost,
  editAPost,
  deleteAPost,
} = PostSlice.actions;

export default PostSlice;
