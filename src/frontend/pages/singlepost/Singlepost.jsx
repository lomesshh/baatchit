import React from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { likePost, savePost } from "frontend/services/PostService";

const Singlepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { allPosts, savedPost } = useSelector((state) => state.post);
  const { user, token } = useSelector((state) => state.auth);
  const findProduct = allPosts.find((prod) => prod._id === postId);

  const findUserInLikes = findProduct.likes.likedBy.findIndex(
    (char) => char.username === user.username
  );
  const findUserInSaved = savedPost.findIndex((ele) => ele === findProduct._id);

  return (
    <Feed>
      <PostCard className="single__post">
        <div className="profile__info">
          <div className="profile__image">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647240006/shoemall/flipflop_qao6dx.png"
              alt="profile-img"
            />
          </div>
          <h3>John Doe</h3>
        </div>
        {findProduct?.imgSrc && (
          <div className="post__image">
            <img src={findProduct?.imgSrc} alt="profile-img" />
          </div>
        )}
        <div className="post__info">
          <h4>{findProduct?.title}</h4>
          <p>{findProduct?.content}</p>
        </div>
        <div className="button__options">
          <div className="button__left">
            <p
              onClick={() =>
                dispatch(likePost(findProduct, user, findProduct._id, token))
              }
            >
              <span>{findProduct.likes.likeCount}</span>{" "}
              <i
                class={`fa-solid fa-thumbs-up ${
                  findUserInLikes !== -1 ? `liked__post` : ``
                } `}
              ></i>
            </p>
            <p>
              <i class="fa-solid fa-comment-dots"></i>
            </p>
            <p
              onClick={() =>
                dispatch(
                  savePost(savedPost, findProduct, findProduct._id, token)
                )
              }
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
              <i class="fa-solid fa-share-from-square"></i>
            </p>
          </div>
        </div>
      </PostCard>
    </Feed>
  );
};

export { Singlepost };
