import React from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";

const Savedpage = () => {
  return (
    <Feed>
      <h1>
        Saved posts <i class="fa-solid fa-bookmark"></i>
      </h1>
      <PostCard>
        <div className="profile__info">
          <div className="profile__image">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
              alt="profile-img"
            />
          </div>
          <h3>John Doe</h3>
        </div>
        <div className="post__image">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1648029766/gripping%20gears/hero3_m01qvm.webp"
            alt="profile-img"
          />
        </div>
        <div className="post__info">
          <h4>Title</h4>
          <p>
            Ipsum quis consectetur deserunt duis mollit irure ullamco velit
            nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation
            reprehenderit in voluptate. Dolor consequat in non officia Lorem
            sint excepteur Lorem aliquip voluptate commodo exercitation.
          </p>
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
      <PostCard>
        <div className="profile__info">
          <div className="profile__image">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
              alt="profile-img"
            />
          </div>
          <h3>John Doe</h3>
        </div>
        <div className="post__image">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1648029766/gripping%20gears/hero3_m01qvm.webp"
            alt="profile-img"
          />
        </div>
        <div className="post__info">
          <h4>Title</h4>
          <p>
            Ipsum quis consectetur deserunt duis mollit irure ullamco velit
            nostrud. Veniam qui id eu ipsum adipisicing aliqua exercitation
            reprehenderit in voluptate. Dolor consequat in non officia Lorem
            sint excepteur Lorem aliquip voluptate commodo exercitation.
          </p>
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

export { Savedpage };
