import React, { useEffect } from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { getAllSavedPost } from "frontend/services/PostService";
import { useDispatch, useSelector } from "react-redux";
import { Postcard } from "frontend/components";

const Savedpage = () => {
  const dispatch = useDispatch();
  const { savedPost, allPosts } = useSelector((state) => state.post);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllSavedPost(token));
    getFromAllPosts();
  }, [savedPost]);

  const getFromAllPosts = () => {
    const tempArr = [];
    for (let post of allPosts) {
      for (let savepost of savedPost) {
        if (post._id === savepost) {
          tempArr.push(post);
        }
      }
    }
    return tempArr;
  };

  return (
    <Feed>
      <h1>
        Saved posts <i class="fa-solid fa-bookmark"></i>
      </h1>
      {getFromAllPosts().map((post) => (
        <Postcard post={post} kay={post._id} />
      ))}
    </Feed>
  );
};

export { Savedpage };
