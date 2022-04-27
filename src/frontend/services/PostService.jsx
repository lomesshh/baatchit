import axios from "axios";
import { Notify } from "frontend/components";
import {
  getPosts,
  toggleLoader,
  getAllUsersPost,
  createAPost,
  editAPost,
  deleteAPost,
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
    dispatch(toggleLoader(true));
    try {
      const response = await axios.get(`/api/posts/user/${userName}`);
      dispatch(getAllUsersPost(response.data.posts));
      dispatch(toggleLoader(false));
    } catch (error) {
      dispatch(toggleLoader(false));
      console.log(error);
    }
  };
};

export const createPost = (post, token, inputImage) => {
  let tempObj = { ...post };
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const data = new FormData();
      data.append("file", inputImage);
      data.append("upload_preset", "cvj0uqih");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          tempObj = { ...tempObj, imgSrc: json.url };
        })
        .catch((error) => {
          console.log(error);
          Notify("Image uploading failed", "error");
        });
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

export const editPost = (postDetail, postId, token, inputImage) => {
  let post = { ...postDetail };
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const data = new FormData();
      data.append("file", inputImage);
      data.append("upload_preset", "cvj0uqih");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          post = { ...post, imgSrc: json.url };
        })
        .catch((error) => {
          console.log(error);
          Notify("Image uploading failed", "error");
        });
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
