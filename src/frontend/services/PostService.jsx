import axios from "axios";
import { Notify } from "frontend/components";
import {
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
} from "frontend/redux/Slices/PostSlice";

export const getAllPost = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/posts");
      dispatch(getPosts(res.data.posts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersPost = (userName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/posts/user/${userName}`);
      dispatch(getAllUsersPost(response.data.posts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (post, token, inputImage) => {
  const tempObj = { ...post };
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      // const formData = new FormData();
      // formData.append("file", inputImage);
      // formData.append("upload_preset", "cvj0uqih");
      // console.log(formData);
      // await axios
      //   .post(
      //     "https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload",
      //     formData
      //   )
      //   .then((res) => {
      //     tempObj = { ...tempObj, imgSrc: res.data.url };
      //     console.log("img", res, tempObj);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     alert(error);
      //   });
      const res = await axios.post(
        "/api/posts",
        { tempObj },
        {
          headers: { authorization: token },
        }
      );
      dispatch(createAPost(res.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post created successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to create post", "error");
    }
  };
};

export const editPost = (post, postId, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { post },
        {
          headers: { authorization: token },
        }
      );
      dispatch(editAPost(response.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post updated successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to update post", "error");
    }
  };
};

export const deletePost = (postId, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      dispatch(deleteAPost(res.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post deleted successfully", "warning");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to delete post", "error");
    }
  };
};

export const likePost = (post, user, postId, token) => {
  const findUserInLikes = post.likes.likedBy.findIndex(
    (char) => char.username === user.username
  );

  return async (dispatch) => {
    dispatch(toggleLoader(true));
    if (findUserInLikes === -1) {
      try {
        const res = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        Notify("You liked a post", "success");
        dispatch(likeAPost(res.data.posts));
        dispatch(toggleLoader(false));
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to like post", "error");
        console.log(error);
      }
    } else {
      try {
        dispatch(toggleLoader(true));
        const res = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        dispatch(dislikeAPost(res.data.posts));
        dispatch(toggleLoader(false));
        Notify("You disliked a post", "info");
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to dislike post", "error");
        console.log(error);
      }
    }
  };
};

export const savePost = (savedPost, post, postId, token) => {
  const findUserInSaved = savedPost.findIndex((ele) => ele === post._id);

  return async (dispatch) => {
    dispatch(toggleLoader(true));
    if (findUserInSaved === -1) {
      try {
        const res = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        Notify("Post saved Successfully", "success");
        dispatch(saveAPoast(res.data.bookmarks));
        dispatch(toggleLoader(false));
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to save post", "error");
        console.log(error);
      }
    } else {
      try {
        dispatch(toggleLoader(true));
        const res = await axios.post(
          `/api/users/remove-bookmark/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        dispatch(unSaveAPoast(res.data.bookmarks));
        dispatch(toggleLoader(false));
        Notify("Post removed from bookmarks", "info");
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to remove post from bookmarks", "error");
        console.log(error);
      }
    }
  };
};

export const getAllSavedPost = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      dispatch(getSavedPost(res.data.bookmarks));
    } catch (error) {
      console.log(error);
    }
  };
};
