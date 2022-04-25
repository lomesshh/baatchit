import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Createpost, Home } from "frontend/styled-component/homeStyled";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "frontend/redux/Slices/AuthSlice";
import { createPost } from "frontend/services/PostService";
import axios from "axios";

const navLinkStyle = ({ isActive }) => {
  return isActive ? `activetab` : `notactive`;
};

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [inputImage, setInputImage] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDetail, setPostDetail] = useState({
    title: "",
    content: "",
    imgSrc: "",
  });

  const onEmojiClick = (event, emojiObject) => {
    setPostDetail({
      ...postDetail,
      content: postDetail.content + emojiObject.emoji,
    });
  };

  // const uploadImage = () => {
  //   const data = new FormData();
  //   data.append("file", inputImage);
  //   data.append("upload_preset", "cvj0uqih");
  //   // for (var value of data.values()) {
  //   //   console.log(value);
  //   // }
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload", data)
  //     .then((res) => {
  //       console.log(res.data.url);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // };

  return (
    <div>
      <Home>
        <div className="sidebar">
          <div className="user__profile">
            <div className="user__image">
              <img
                src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
                alt="profile-img"
              />
            </div>
            <div className="user__info">
              <h4>Admin forever</h4>
              <p>Web developer</p>
            </div>
          </div>
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
        <div className="main">
          <Outlet />
        </div>
        <div className="suggestions">
          {location.pathname === "/home/feed" && (
            <div className="sortby">
              <h3>Sort by</h3>
              <button>Trending</button>
              <button>Newest first</button>
            </div>
          )}
          <div>
            <h3>Suggestions</h3>
            <div className="user__profile">
              <div className="user__image">
                <img
                  src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
                  alt="profile-img"
                />
              </div>
              <div className="user__info">
                <h4>Admin forever</h4>
                <p>Web developer</p>
              </div>
              <div className="user__button">
                <button>Follow</button>
              </div>
            </div>
            <div className="user__profile">
              <div className="user__image">
                <img
                  src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
                  alt="profile-img"
                />
              </div>
              <div className="user__info">
                <h4>Admin forever</h4>
                <p>Web developer</p>
              </div>
              <div className="user__button">
                <button>Follow</button>
              </div>
            </div>
            <div className="user__profile">
              <div className="user__image">
                <img
                  src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
                  alt="profile-img"
                />
              </div>
              <div className="user__info">
                <h4>Admin forever</h4>
                <p>Web developer</p>
              </div>
              <div className="user__button">
                <button>Follow</button>
              </div>
            </div>
            <div className="user__profile">
              <div className="user__image">
                <img
                  src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
                  alt="profile-img"
                />
              </div>
              <div className="user__info">
                <h4>Admin forever</h4>
                <p>Web developer</p>
              </div>
              <div className="user__button">
                <button>Follow</button>
              </div>
            </div>
          </div>
        </div>
      </Home>

      <Modal open={open} onClose={() => setOpen(!open)} center>
        <Createpost>
          <h3>Add New Post</h3>
          <input
            className="modal__input"
            type="text"
            placeholder="Title"
            value={postDetail.title}
            onChange={(e) =>
              setPostDetail({ ...postDetail, title: e.target.value })
            }
          />
          <textarea
            className="modal__input"
            placeholder="Description"
            rows="4"
            cols="50"
            value={postDetail.content}
            onChange={(e) =>
              setPostDetail({ ...postDetail, content: e.target.value })
            }
          ></textarea>
          <div className="emoji__div">
            <i
              onClick={() => setShowEmoji(!showEmoji)}
              class="fa-solid fa-face-grin"
            ></i>
            <input
              type="file"
              onChange={(e) => setInputImage(e.target.files[0])}
            />
          </div>
          {showEmoji && (
            <Picker
              pickerStyle={{ height: "200px", margin: "0.5rem" }}
              disableSearchBar={true}
              onEmojiClick={onEmojiClick}
              disableAutoFocus={true}
              native
            />
          )}
          <button
            className="modal__button"
            onClick={() => {
              setOpen(!open);
              dispatch(createPost(postDetail, token, inputImage));
              // uploadImage();
            }}
          >
            Add
          </button>
        </Createpost>
      </Modal>
    </div>
  );
};

export { Homepage };
