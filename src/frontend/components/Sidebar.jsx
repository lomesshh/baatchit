import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "frontend/redux/Slices/AuthSlice";
import { useSelector, useDispatch } from "react-redux";

const navLinkStyle = ({ isActive }) => {
  return isActive ? `activetab` : `notactive`;
};

const SidebarComp = ({ open, setOpen, showEmoji, setShowEmoji }) => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Link to="profile">
        <div className="user__profile">
          <div className="user__image">
            <img src={user.profilePic} alt="profile-img" />
          </div>
          <div className="user__info">
            <h4>{user.firstName + " " + user.lastName}</h4>
            <p>@{user.username}</p>
          </div>
        </div>
      </Link>
      <div className="sidebar__option">
        <NavLink className={navLinkStyle} to="feed">
          <p>
            <i class="fa-brands fa-wpexplorer"></i> Explore
          </p>
        </NavLink>
        <NavLink className={navLinkStyle} to="likes">
          <p>
            <i class="fa-solid fa-thumbs-up"></i> Liked posts
          </p>
        </NavLink>
        <NavLink className={navLinkStyle} to="saved">
          <p>
            <i class="fa-solid fa-bookmark"></i> Saved posts
          </p>
        </NavLink>
        <p
          onClick={() => {
            setOpen(!open);
            setShowEmoji(false);
          }}
        >
          <i class="fa-solid fa-circle-plus"></i> Create a post
        </p>
        <NavLink className={navLinkStyle} to="profile">
          <p>
            <i class="fa-solid fa-user"></i> My Profile
          </p>
        </NavLink>
        {token && (
          <p
            onClick={() => {
              dispatch(userLogout());
              navigate("/");
            }}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </p>
        )}
      </div>
    </div>
  );
};

export { SidebarComp };
