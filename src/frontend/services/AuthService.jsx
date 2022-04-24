import axios from "axios";
import { userLogin } from "frontend/redux/Slices/AuthSlice";

export const handleUserLogin = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/login", user);
      dispatch(
        userLogin({ user: res.data.foundUser, token: res.data.encodedToken })
      );
      localStorage.setItem("socialUser", JSON.stringify(res.data.foundUser));
      localStorage.setItem("socialToken", res.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleUserSignup = (user) => {
  return async () => {
    try {
      const res = await axios.post("/api/auth/signup", user);
    } catch (error) {
      console.log(error);
    }
  };
};
