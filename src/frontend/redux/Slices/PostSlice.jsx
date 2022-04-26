const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allPosts: [],
  usersPost: [],
  savedPost: [],
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
    likeAPost(state, action) {
      state.allPosts = action.payload;
    },
    dislikeAPost(state, action) {
      state.allPosts = action.payload;
    },
    getSavedPost(state, action) {
      state.savedPost = action.payload;
    },
    saveAPoast(state, action) {
      state.savedPost = action.payload;
    },
    unSaveAPoast(state, action) {
      state.savedPost = action.payload;
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
  likeAPost,
  dislikeAPost,
  getSavedPost,
  saveAPoast,
  unSaveAPoast,
} = PostSlice.actions;

export default PostSlice;
