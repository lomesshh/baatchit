import React, { useState } from "react";
import { PostCard } from "frontend/styled-component/feedStyled";
import { useSelector, useDispatch } from "react-redux";
import { Createpost } from "frontend/styled-component/homeStyled";
import Picker from "emoji-picker-react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  editPost,
  deletePost,
  likePost,
  savePost,
} from "frontend/services/PostService";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Notify } from "frontend/components";

const Postcard = ({ post }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { savedPost, filterType } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [inputImage, setInputImage] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [postDetail, setPostDetail] = useState({
    title: post.title,
    content: post.content,
    imgSrc: post.imgSrc,
  });

  function copy() {
    const el = document.createElement("input");
    el.value = `https://baatchit-social.netlify.app/post/` + post._id;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    Notify("Copied to clipboard", "info");
  }

  const onEmojiClick = (event, emojiObject) => {
    setPostDetail({
      ...postDetail,
      content: postDetail.content + emojiObject.emoji,
    });
  };

  const findUserInLikes = post?.likes?.likedBy?.findIndex(
    (char) => char.username === user.username
  );

  const findUserInSaved = savedPost.findIndex((ele) => ele === post._id);

  return (
    <PostCard>
      <div className="profile__info">
        <div className="profile__image">
          <LazyLoadImage
            src={post.profilePic}
            alt="profile-img"
            effect="blur"
          />
        </div>
        <h3>{post.username}</h3>
      </div>
      <Link to={`/post/${post._id}`}>
        {post.imgSrc && (
          <div className="post__image">
            <LazyLoadImage src={post?.imgSrc} alt="post-img" effect="blur" />
          </div>
        )}
        <div className="post__info">
          <h4>{post?.title}</h4>
          <p>{post?.content}</p>
        </div>
      </Link>
      <div className="button__options">
        <div className="button__left">
          <p
            onClick={() =>
              dispatch(likePost(post, user, post._id, token, filterType))
            }
          >
            <span>{post?.likes?.likeCount}</span>{" "}
            <i
              class={`fa-solid fa-thumbs-up ${
                findUserInLikes !== -1 ? `liked__post` : ``
              } `}
            ></i>
          </p>
          <Link to={`/post/${post._id}`}>
            <p>
              <i class="fa-solid fa-comment-dots"></i>
            </p>
          </Link>
          <p
            onClick={() => dispatch(savePost(savedPost, post, post._id, token))}
          >
            <i
              class={`fa-solid fa-bookmark ${
                findUserInSaved !== -1 ? `saved__post` : ``
              } `}
            ></i>
          </p>
        </div>
        <div className="button__right">
          <p>
            <i class="fa-solid fa-share-from-square" onClick={copy}></i>
          </p>
          {user?.username === post?.username && (
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
      {post?.likes?.likeCount === 0 && <p>Be the first to like</p>}
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
