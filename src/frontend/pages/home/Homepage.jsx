import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Createpost, Home } from "frontend/styled-component/homeStyled";
// import { Outlet } from "react-router-dom";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "frontend/services/PostService";
import { fetchAllUsers } from "frontend/services/UserService";
import { SidebarComp, Suggestions } from "frontend/components";

const Homepage = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { allPosts } = useSelector((state) => state.user);
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

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [allPosts]);

  return (
    <div>
      <Home>
        <SidebarComp
          showEmoji={showEmoji}
          setShowEmoji={setShowEmoji}
          open={open}
          setOpen={setOpen}
        />
        <div className="main">{children}</div>
        <Suggestions />
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
              className="fa-solid fa-face-grin"
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
