import React, { useEffect } from "react";
import { Feed } from "frontend/styled-component/feedStyled";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "frontend/services/PostService";
import Postcard from "frontend/components/PostCard";

const Explorepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const { allPosts } = useSelector((state) => state.post);

  return (
    <Feed>
      <h1>
        Explore <i class="fa-brands fa-wpexplorer"></i>
      </h1>
      {allPosts.map((post) => (
        <Postcard post={post} key={post._id} />
      ))}
    </Feed>
  );
};

export { Explorepage };
