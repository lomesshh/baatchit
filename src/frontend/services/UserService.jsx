import { getAllUsers, getUserData } from "frontend/redux/Slices/UserSlice";
import axios from "axios";
import {
  handleFollowUser,
  updateUserData,
} from "frontend/redux/Slices/AuthSlice";
import { toggleLoader } from "frontend/redux/Slices/PostSlice";
import { Notify } from "frontend/components";

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/users");
      dispatch(getAllUsers(res.data.users));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserData = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      dispatch(getUserData(res.data.user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserData = (data, token, inputImage) => {
  let userData = { ...data };
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
          userData = { ...userData, profilePic: json.url };
          console.log("img", json.url, userData);
        })
        .catch((error) => {
          dispatch(toggleLoader(false));
          console.log(error);
          Notify("Image Uploading failed", "error");
        });
      const res = await axios.post(
        "/api/users/edit",
        {
          userData,
        },
        {
          headers: { authorization: token },
        }
      );
      dispatch(updateUserData(res.data.user));
      dispatch(toggleLoader(false));
      Notify("Users data updated successfully", "success");
    } catch (error) {
      dispatch(toggleLoader(false));
      Notify("Unable to update data", "error");
      console.log(error);
    }
  };
};

export const followUser = (userId, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log(res.data);
      Notify("User Followed", "success");
      dispatch(handleFollowUser(res.data.user));
    } catch (error) {
      Notify("Unable to follow user", "error");
      console.log(error);
    }
  };
};

export const unfollowUser = (userId, token) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log(res.data);
      Notify("User Unfollowed", "success");
      dispatch(handleFollowUser(res.data.user));
    } catch (error) {
      console.log(error);
      Notify("Unable to Unfollow user", "success");
    }
  };
};
