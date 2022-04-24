import React from "react";
import { PostCard } from "frontend/styled-component/feedStyled";

const Postcard = ({ post }) => {
  return (
    <PostCard>
      <div className="profile__info">
        <div className="profile__image">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
            alt="profile-img"
          />
        </div>
        <h3>{post.username}</h3>
      </div>
      {post.imgSrc && (
        <div className="post__image">
          <img src={post.imgSrc} alt="profile-img" />
        </div>
      )}
      <div className="post__info">
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </div>
      <div className="button__options">
        <div className="button__left">
          <p>
            <i class="fa-solid fa-thumbs-up"></i>
          </p>
          <p>
            <i class="fa-solid fa-comment-dots"></i>
          </p>
          <p>
            <i class="fa-solid fa-bookmark"></i>
          </p>
        </div>
        <div className="button__right">
          <p>
            <i class="fa-solid fa-share-from-square"></i>
          </p>
        </div>
      </div>
    </PostCard>
  );
};

export default Postcard;
