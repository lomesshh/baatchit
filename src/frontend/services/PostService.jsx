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
