import axios from "axios";
import { getPosts, toggleLoader } from "frontend/redux/Slices/PostSlice";

export const getAllPost = () => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const res = await axios.get("/api/posts");
      dispatch(getPosts(res.data.posts));
      dispatch(toggleLoader(false));
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
    }
  };
};
