import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AnyUser,
  Explorepage,
  Homepage,
  Landingpage,
  Likespage,
  Login,
  Profile,
  Savedpage,
  Signup,
  Singlepost,
} from "frontend/pages";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="feed" element={<Explorepage />} />
        <Route path="likes" element={<Likespage />} />
        <Route path="saved" element={<Savedpage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/post/:postId" element={<Singlepost />} />
        <Route path="/user/:userId" element={<AnyUser />} />
      </Routes>
    </div>
  );
};

export { RoutesList };
