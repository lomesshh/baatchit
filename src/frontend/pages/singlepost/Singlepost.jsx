import React from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-responsive-modal/styles.css";

const Singlepost = () => {
  const { postId } = useParams();
  const { allPosts } = useSelector((state) => state.post);
  const findProduct = allPosts.find((prod) => prod._id === postId);

  return (
    <Feed>
      <PostCard className="single__post">
        <div className="profile__info">
          <div className="profile__image">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
              alt="profile-img"
            />
          </div>
          <h3>John Doe</h3>
        </div>
        {findProduct?.imgSrc && (
          <div className="post__image">
            <img src={findProduct?.imgSrc} alt="profile-img" />
          </div>
        )}
        <div className="post__info">
          <h4>{findProduct?.title}</h4>
          <p>{findProduct?.content}</p>
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
    </Feed>
  );
};

export { Singlepost };
