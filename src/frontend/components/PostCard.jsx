import React, { useState } from "react";
import { PostCard } from "frontend/styled-component/feedStyled";
import { useSelector, useDispatch } from "react-redux";
import { Createpost } from "frontend/styled-component/homeStyled";
import Picker from "emoji-picker-react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { editPost, deletePost } from "frontend/services/PostService";
import { Link } from "react-router-dom";

const Postcard = ({ post }) => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [inputImage, setInputImage] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDetail, setPostDetail] = useState({
    title: post.title,
    content: post.content,
    imgSrc: post.imgSrc,
  });

  const onEmojiClick = (event, emojiObject) => {
    setPostDetail({
      ...postDetail,
      content: postDetail.content + emojiObject.emoji,
    });
  };
  return (
    <PostCard>
      <div className="profile__info">
        <div className="profile__image">
          <img src={post.profilePic} alt="profile-img" />
        </div>
        <h3>{post.username}</h3>
      </div>
      <Link to={`/post/${post._id}`}>
        {post.imgSrc && (
          <div className="post__image">
            <img src={post.imgSrc} alt="profile-img" />
          </div>
        )}
        <div className="post__info">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      </Link>
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
          {user.username === post.username && (
            <>
              <p
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <i class="fa-solid fa-pencil"></i>
              </p>
              <p
                onClick={() => {
                  dispatch(deletePost(post._id, token));
                }}
              >
                <i class="fa-solid fa-trash"></i>
              </p>
            </>
          )}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(!open)} center>
        <Createpost>
          <h3>Edit Post</h3>
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
              dispatch(editPost(postDetail, post._id, token, inputImage));
            }}
          >
            Add
          </button>
        </Createpost>
      </Modal>
    </PostCard>
  );
};

export { Postcard };
