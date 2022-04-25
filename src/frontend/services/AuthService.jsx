import axios from "axios";
import { Notify } from "frontend/components";
import { userLogin } from "frontend/redux/Slices/AuthSlice";

export const handleUserLogin = (user, navigate, path) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/login", user);
      dispatch(
        userLogin({ user: res.data.foundUser, token: res.data.encodedToken })
      );
      localStorage.setItem("socialUser", JSON.stringify(res.data.foundUser));
      localStorage.setItem("socialToken", res.data.encodedToken);
      Notify("Login Successful", "success");
      navigate(path);
    } catch (error) {
      console.error(error);
      Notify("Unable to Login", "error");
    }
  };
};

export const handleUserSignup = (user, navigate, path) => {
  return async () => {
    try {
      const res = await axios.post("/api/auth/signup", user);
      if (res.status === 201) {
        Notify("Signup Successful", "success");
        navigate(path);
      }
    } catch (error) {
      if (error.response.status === 422) {
        Notify("Username already exist", "error");
      } else if (error.response.status === 500) {
        Notify("Unable to signup", "error");
      } else {
        Notify("Unable to signup", "error");
      }
    }
  };
};
