import React, { useEffect } from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useSelector } from "react-redux";
import { Postcard } from "frontend/components";

const Likespage = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const getLikedPosts = (allPosts) => {
    const tempArr = [];
    for (let post of allPosts) {
      for (let ele of post.likes.likedBy) {
        if (ele.username === user.username) {
          tempArr.push(post);
        }
      }
    }
    return tempArr;
  };

  useEffect(() => {
    getLikedPosts(allPosts);
  }, []);

  return (
    <Feed>
      <h1>
        Liked posts <i class="fa-solid fa-heart"></i>
      </h1>
      {getLikedPosts(allPosts).map((post) => (
        <Postcard post={post} key={post._id} />
      ))}
    </Feed>
  );
};

export { Likespage };
