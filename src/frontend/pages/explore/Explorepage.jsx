import React, { useEffect } from "react";
import { Feed } from "frontend/styled-component/feedStyled";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "frontend/services/PostService";
import { Postcard } from "frontend/components";
import { fetchAllUsers } from "frontend/services/UserService";

const Explorepage = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(fetchAllUsers());
  }, [allPosts]);

  return (
    <Feed>
      <h1>
        Explore <i class="fa-brands fa-wpexplorer"></i>
      </h1>
      {allPosts
        .filter((ele) => ele.username !== user.username)
        .map((post) => (
          <Postcard post={post} key={post._id} />
        ))}
    </Feed>
  );
};

export { Explorepage };
