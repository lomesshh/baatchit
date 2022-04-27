import React from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { Home } from "frontend/styled-component/homeStyled";
import { SidebarComp, Suggestions } from "frontend/components";
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
    <Home>
      <SidebarComp />
      <div className="main">
        <Feed>
          <PostCard className="single__post">
            <div className="profile__info">
              <div className="profile__image">
                <img src={findProduct.profilePic} alt="profile-img" />
              </div>
              <h3>{findProduct.username}</h3>
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
              </div>
            </div>
          </PostCard>
        </Feed>
      </div>
      <Suggestions />
    </Home>
  );
};

export { Singlepost };
