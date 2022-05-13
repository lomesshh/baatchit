const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allPosts: [],
  filteredPost: [],
  filterType: "",
  usersPost: [],
  anyUserPost: [],
  savedPost: [],
  loader: false,
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.allPosts = action.payload;
      state.filteredPost = action.payload;
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
    setFilteredPost(state, action) {
      const { posts, type } = action.payload;
      state.filteredPost = posts;
      state.filterType = type;
    },
    getAnyUsersPost(state, action) {
      state.anyUserPost = action.payload;
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
  setFilteredPost,
  addComment,
  getAnyUsersPost,
} = PostSlice.actions;

export default PostSlice;
