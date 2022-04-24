import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Feedpage,
  Homepage,
  Likespage,
  Login,
  Profile,
  Savedpage,
  Signup,
} from "frontend/pages";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />}>
          <Route path="feed" element={<Feedpage />} />
          <Route path="likes" element={<Likespage />} />
          <Route path="saved" element={<Savedpage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export { RoutesList };
