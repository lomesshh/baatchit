import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { ProfileDiv } from "frontend/styled-component/profileStyled";
import { Createpost } from "frontend/styled-component/homeStyled";
import { useSelector, useDispatch } from "react-redux";
import { getUsersPost } from "frontend/services/PostService";
import { Postcard } from "frontend/components";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { allPosts, usersPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPost(user.username));
  }, [allPosts]);

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
            <h3>{user.firstName + " " + user.lastName}</h3>
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <i class="fa-solid fa-pencil"></i>
            </button>
          </div>
          <h4>@{user.username}</h4>
          <div className="profile__stats">
            <p>
              <strong>2</strong> Posts
            </p>
            <p>
              <strong>{user.followers?.length}</strong> Followers
            </p>
            <p>
              <strong>{user.following?.length}</strong> Following
            </p>
          </div>
          <h4 className="profile__bio">{user.bio}</h4>
          <a href={user.link}>{user.link}</a>
        </div>
      </div>
      <div>
        <h1 className="post__heading">
          My Posts <i class="fa-solid fa-newspaper"></i>
        </h1>
        {usersPost.map((post) => (
          <Postcard post={post} key={post._id} />
        ))}
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
