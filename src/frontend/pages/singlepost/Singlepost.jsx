import React, { useState } from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { Home } from "frontend/styled-component/homeStyled";
import { SidebarComp, Suggestions, Notify } from "frontend/components";
import {
  addCommentHandler,
  deleteCommentHandler,
  likePost,
  savePost,
} from "frontend/services/PostService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Singlepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { allPosts, savedPost } = useSelector((state) => state.post);
  const { user, token } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  const [viewComment, setViewComment] = useState(false);

  const findProduct = allPosts.find((prod) => prod._id === postId);
  const findUserInLikes = findProduct.likes.likedBy.findIndex(
    (char) => char.username === user.username
  );
  const findUserInSaved = savedPost.findIndex((ele) => ele === findProduct._id);

  return (
    <Home>
      <SidebarComp />
      <div className="main">
        <div>
          <Feed>
            <PostCard className="single__post">
              <div className="profile__info">
                <div className="profile__image">
                  <LazyLoadImage
                    src={findProduct.profilePic}
                    alt="profile-img"
                    effect="blur"
                  />
                </div>
                <h3>{findProduct.username}</h3>
              </div>
              {findProduct?.imgSrc && (
                <div className="post__image">
                  <LazyLoadImage
                    src={findProduct?.imgSrc}
                    alt="profile-img"
                    effect="blur"
                  />
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
            <div className="inputComment">
              <h3>
                Comment section ( {findProduct.comments.length} Comments )
                {viewComment && (
                  <i
                    className="fa-solid fa-circle-chevron-up"
                    onClick={() => setViewComment(false)}
                  ></i>
                )}
                {!viewComment && (
                  <i
                    className="fa-solid fa-circle-chevron-down"
                    onClick={() => setViewComment(true)}
                  ></i>
                )}
              </h3>
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Write your comment here..."
              />
              <button
                onClick={() => {
                  if (comment === "") {
                    Notify("Please write comment first", "warning");
                  } else {
                    dispatch(
                      addCommentHandler(user, comment, findProduct._id, token)
                    );
                    setViewComment(true);
                    setComment("");
                  }
                }}
              >
                Post
              </button>
            </div>

            {/* Display all comments */}

            <div className="disply__comment">
              {findProduct.comments.length < 1 && <h5>No comments yet !</h5>}
              {viewComment && (
                <div>
                  {findProduct.comments.map((item) => (
                    <div className="commentSection">
                      <div className="comment_pic">
                        <img src={item.profilePic} />
                        <p>{item.comment}</p>
                      </div>
                      {item.username === user.username && (
                        <i
                          class="fa-solid fa-trash"
                          onClick={() =>
                            dispatch(
                              deleteCommentHandler(
                                item._id,
                                findProduct._id,
                                token
                              )
                            )
                          }
                        ></i>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Feed>
        </div>
      </div>
      <Suggestions />
    </Home>
  );
};

export { Singlepost };
