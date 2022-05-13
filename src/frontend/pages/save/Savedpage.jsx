import React, { useEffect } from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { getAllSavedPost } from "frontend/services/PostService";
import { useDispatch, useSelector } from "react-redux";
import { Postcard } from "frontend/components";
import { Homepage } from "..";

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
    <Homepage>
      <Feed>
        <h1>
          Saved posts <i className="fa-solid fa-bookmark"></i>
        </h1>
        {getFromAllPosts().length < 1 && (
          <h1 className="not__found">No bookmarked post found !</h1>
        )}
        {getFromAllPosts().map((post) => (
          <Postcard post={post} kay={post._id} />
        ))}
      </Feed>
    </Homepage>
  );
};

export { Savedpage };
