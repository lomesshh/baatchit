import React, { useState, useEffect } from "react";
import { Feed, PostCard } from "frontend/styled-component/feedStyled";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { Home } from "frontend/styled-component/homeStyled";
import {
  SidebarComp,
  Suggestions,
  Notify,
  Postcard,
} from "frontend/components";
import {
  addCommentHandler,
  deleteCommentHandler,
  likePost,
  savePost,
} from "frontend/services/PostService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Homepage } from "..";

const Singlepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allPosts, savedPost } = useSelector((state) => state.post);
  const { user, token } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  const [viewComment, setViewComment] = useState(false);

  const findProduct = allPosts.find((prod) => prod._id === postId);

  return (
    <Homepage>
      <Feed>
        <Postcard post={findProduct} />
        <div className="inputComment">
          <h3>
            Comment section ( {findProduct?.comments?.length} Comments )
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
          {findProduct?.comments?.length < 1 && <h5>No comments yet !</h5>}
          {viewComment && (
            <div>
              {findProduct?.comments?.map((item) => (
                <div className="commentSection">
                  <div className="comment__userinfo">
                    <div className="comment_pic">
                      <img src={item.profilePic} />
                      <p>{item.username}</p>
                    </div>
                    {item.username === user.username && (
                      <i
                        className="fa-solid fa-trash"
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
                  <p className="comment__stmt">{item.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Feed>
    </Homepage>
  );
};

export { Singlepost };
