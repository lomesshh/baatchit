import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { ProfileDiv } from "frontend/styled-component/profileStyled";
import { Createpost } from "frontend/styled-component/homeStyled";
import { useSelector, useDispatch } from "react-redux";
import { getUsersPost } from "frontend/services/PostService";
import { Postcard } from "frontend/components";
import {
  editUserData,
  fetchUserData,
  unfollowUser,
} from "frontend/services/UserService";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [inputImage, setInputImage] = useState();
  const { user, token } = useSelector((state) => state.auth);
  const { anyUser } = useSelector((state) => state.user);
  const { allPosts, usersPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ ...user });

  useEffect(() => {
    dispatch(fetchUserData(user._id));
    dispatch(getUsersPost(user.username, token));
  }, [user, allPosts]);

  return (
    <ProfileDiv>
      <div className="profile__main">
        <div className="profile__img">
          <div className="image__outer">
            <img src={user.profilePic} alt="profile-img" />
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
              <strong>{usersPost.length}</strong> Posts
            </p>
            <p onClick={() => setOpenTwo(!openTwo)}>
              <strong>{user.followers?.length}</strong> Followers
            </p>
            <p onClick={() => setOpenOne(!openOne)}>
              <strong>{user.following?.length}</strong> Following
            </p>
          </div>
          <h4 className="profile__bio">{user.bio}</h4>
          <a href={user.link}>{user.link}</a>
        </div>
      </div>
      <div>
        <h1 className="post__heading">
          Posts <i class="fa-solid fa-newspaper"></i>
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
            value={userData.firstName + " " + userData.lastName}
            placeholder="Name"
            disabled
          />
          <input
            className="modal__input"
            type="text"
            value={userData.username}
            placeholder="UserName"
            disabled
          />
          <textarea
            className="modal__input"
            placeholder="Bio"
            rows="4"
            cols="50"
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          ></textarea>

          <input
            className="modal__input"
            type="text"
            placeholder="Website link ( If any )"
            value={userData.link}
            onChange={(e) => setUserData({ ...userData, link: e.target.value })}
          />
          <div className="emoji__div" style={{ paddingLeft: "0.5rem" }}>
            <p>Select profile pic</p>

            <input
              type="file"
              onChange={(e) => setInputImage(e.target.files[0])}
            />
          </div>
          <button
            className="modal__button"
            onClick={() => {
              setOpen(!open);
              dispatch(editUserData(userData, token, inputImage));
            }}
          >
            Update
          </button>
        </Createpost>
      </Modal>
      <Modal open={openOne} onClose={() => setOpenOne(!openOne)} center>
        <Createpost>
          <h3>Followings</h3>
          {user.following.map((user) => (
            <div className="user__profile" key={user._id}>
              <div className="user__image">
                <img src={user.profilePic} alt="profile-img" />
              </div>
              <div className="user__info">
                <h4>{user.firstName + " " + user.lastName}</h4>
                <p>@{user.username}</p>
              </div>
              <div className="user__button">
                <button
                  onClick={() => {
                    dispatch(unfollowUser(user._id, token));
                  }}
                >
                  Unfollow
                </button>
              </div>
            </div>
          ))}
        </Createpost>
      </Modal>
      <Modal open={openTwo} onClose={() => setOpenTwo(!openTwo)} center>
        <Createpost>
          <h3>Followings</h3>
          {user.followers.map((user) => (
            <div className="user__profile" key={user._id}>
              <div className="user__image">
                <img src={user.profilePic} alt="profile-img" />
              </div>
              <div className="user__info">
                <h4>{user.firstName + " " + user.lastName}</h4>
                <p>@{user.username}</p>
              </div>
            </div>
          ))}
        </Createpost>
      </Modal>
    </ProfileDiv>
  );
};

export { Profile };
