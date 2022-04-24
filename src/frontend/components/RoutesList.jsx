import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Explorepage,
  Homepage,
  Likespage,
  Login,
  Profile,
  Savedpage,
  Signup,
} from "frontend/pages";
import Mockman from "mockman-js";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/home" element={<Homepage />}>
          <Route path="feed" element={<Explorepage />} />
          <Route path="likes" element={<Likespage />} />
          <Route path="saved" element={<Savedpage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export { RoutesList };
