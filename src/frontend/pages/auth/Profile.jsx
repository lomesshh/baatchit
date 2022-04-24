import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { ProfileDiv } from "frontend/styled-component/profileStyled";
import { PostCard } from "frontend/styled-component/feedStyled";
import { Createpost } from "frontend/styled-component/homeStyled";

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <ProfileDiv>
      <div className="profile__main">
        <div className="profile__img">
          <div className="image__outer">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png"
              alt="profile-img"
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h3>John Doe</h3>
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <i class="fa-solid fa-pencil"></i>
            </button>
          </div>
          <h4>@johndoe</h4>
          <div className="profile__stats">
            <p>
              <strong>2</strong> Posts
            </p>
            <p>
              <strong>12</strong> Followers
            </p>
            <p>
              <strong>7</strong> Following
            </p>
          </div>
          <h4 className="profile__bio">My Bio goes here</h4>
          <a href="https://lomeshbadhe.netlify.app">
            https://lomeshbadhe.netlify.app
          </a>
        </div>
      </div>
      <div>
        <h1 className="post__heading">
          My Posts <i class="fa-solid fa-newspaper"></i>
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
              <p>
                <i class="fa-solid fa-trash"></i>
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
              <p>
                <i class="fa-solid fa-trash"></i>
              </p>
            </div>
          </div>
        </PostCard>
      </div>
      <Modal open={open} onClose={() => setOpen(!open)} center>
        <Createpost>
          <h3>Update Profile</h3>
          <input
            className="modal__input"
            type="text"
            value="John Doe"
            placeholder="Name"
            disabled
          />
          <input
            className="modal__input"
            type="text"
            value="@johndoe"
            placeholder="UserName"
            disabled
          />
          <textarea
            className="modal__input"
            placeholder="Bio"
            rows="4"
            cols="50"
            value="My Bio goes here"
          ></textarea>

          <input
            className="modal__input"
            type="text"
            placeholder="Website link ( If any )"
            value="https://lomeshbadhe.netlify.app"
          />
          <button
            className="modal__button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Update
          </button>
        </Createpost>
      </Modal>
    </ProfileDiv>
  );
};

export { Profile };
