import React from "react";
import { followUser } from "frontend/services/UserService";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredPostData } from "frontend/services/PostService";

const Suggestions = () => {
  const location = useLocation();
  const { token, user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const { allPosts, filteredPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <div className="suggestions">
      {location.pathname === "/home/feed" && (
        <div className="sortby">
          <h3>Sort by</h3>
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "TRENDING")}
          >
            Trending
          </button>
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "NEW_FIRST")}
          >
            Newest first
          </button>
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "OLD_FIRST")}
          >
            Oldest first
          </button>
        </div>
      )}
      <div>
        <h3>Suggestions</h3>
        {allUsers
          .filter((ele) => ele.username !== user.username)
          .filter((ele) => !user.following.some((i) => i._id === ele._id))
          .map((user) => (
            <div key={user._id} className="user__profile">
              <div className="user__image">
                <img src={user.profilePic} alt="profile-img" />
              </div>
              <div className="user__info">
                <h4>{user.firstName + " " + user.lastName}</h4>
                <p>@{user.username}</p>
              </div>
              <div className="user__button">
                <button onClick={() => dispatch(followUser(user._id, token))}>
                  Follow
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Suggestions };
