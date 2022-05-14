import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { ProfileDiv } from "frontend/styled-component/profileStyled";
import { Createpost } from "frontend/styled-component/homeStyled";
import { useSelector, useDispatch } from "react-redux";
import { getAnyUsersPostHandler } from "frontend/services/PostService";
import { Postcard } from "frontend/components";
import {
  fetchUserData,
  unfollowUser,
  followUser,
} from "frontend/services/UserService";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Homepage } from "..";

const AnyUser = () => {
  const { userId } = useParams();
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { allPosts, anyUserPost, loader } = useSelector((state) => state.post);
  const { anyUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findUserInFollowing = user.following.some(
    (ele) => ele.username === anyUser.username
  );

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    dispatch(fetchUserData(userId, token, navigate));
  }, [userId, user]);

  useEffect(() => {
    dispatch(getAnyUsersPostHandler(anyUser.username, token));
  }, [allPosts]);

  const getUserProfile = (user) => {
    navigate(`/user/${user._id}`);
    setOpenOne(false);
    setOpenTwo(false);
  };

  return (
    <Homepage>
      <ScrollToTop />
      <ProfileDiv>
        {!loader && (
          <div className="profile__main">
            <div className="profile__img">
              <div className="image__outer">
                <img src={anyUser.profilePic} alt="profile-img" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__edit">
                <h3>{anyUser.firstName + " " + anyUser.lastName}</h3>
                {!findUserInFollowing && (
                  <button
                    className="follow__button"
                    onClick={() => dispatch(followUser(anyUser._id, token))}
                  >
                    Follow
                  </button>
                )}
                {findUserInFollowing && (
                  <button
                    className="follow__button"
                    onClick={() => {
                      dispatch(unfollowUser(anyUser._id, token));
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
              <h4>@{anyUser.username}</h4>
              <div className="profile__stats">
                <p>
                  <strong>{anyUserPost.length}</strong> Posts
                </p>
                <p onClick={() => setOpenTwo(!openTwo)}>
                  <strong>{anyUser.followers?.length}</strong> Followers
                </p>
                <p onClick={() => setOpenOne(!openOne)}>
                  <strong>{anyUser.following?.length}</strong> Following
                </p>
              </div>
              <h4 className="profile__bio">{user.bio}</h4>
              <a href={anyUser.link} target="_blank" rel="noreferrer noopener">
                {anyUser.link}
              </a>
            </div>
          </div>
        )}
        <div>
          <h1 className="post__heading">
            Posts <i className="fa-solid fa-newspaper"></i>
          </h1>
          {anyUserPost.length < 1 && (
            <h1 className="not__found">No post found !</h1>
          )}
          {
            <div>
              {anyUserPost.map((post) => (
                <Postcard post={post} key={post._id} />
              ))}
            </div>
          }
        </div>

        <Modal open={openOne} onClose={() => setOpenOne(!openOne)} center>
          <Createpost>
            <h3>Followings</h3>
            {anyUser?.following?.length < 1 && <h2>No followings found !</h2>}
            {anyUser?.following?.map((user) => (
              <div
                className="user__profile"
                key={user._id}
                onClick={() => getUserProfile(user)}
              >
                <div className="user__image">
                  <img src={user.profilePic} alt="profile-img" />
                </div>
                <div className="user__info">
                  <h4>{user.firstName + " " + user.lastName}</h4>
                  <p>@{user.username}</p>
                </div>
                <div className="user__button"></div>
              </div>
            ))}
          </Createpost>
        </Modal>

        <Modal open={openTwo} onClose={() => setOpenTwo(!openTwo)} center>
          <Createpost>
            <h3>Followers</h3>
            {anyUser?.followers?.length < 1 && <h2>No followers found !</h2>}
            {anyUser?.followers?.map((user) => (
              <div
                className="user__profile"
                key={user._id}
                onClick={() => getUserProfile(user)}
              >
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
    </Homepage>
  );
};

export { AnyUser };
