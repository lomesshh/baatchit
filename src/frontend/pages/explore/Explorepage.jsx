import React, { useEffect } from "react";
import { Feed } from "frontend/styled-component/feedStyled";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, setFilteredPostData } from "frontend/services/PostService";
import { Postcard } from "frontend/components";
import { fetchAllUsers } from "frontend/services/UserService";
import { Homepage } from "..";

const Explorepage = () => {
  const dispatch = useDispatch();
  const { allPosts, filteredPost, filterType } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);

  return (
    <Homepage>
      <Feed>
        <h1>
          Explore <i className="fa-brands fa-wpexplorer"></i>
        </h1>
        <div className="filter__button">
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "TRENDING")}
          >
            Trending
          </button>
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "NEW_FIRST")}
          >
            Newest
          </button>
          <button
            onClick={() => setFilteredPostData(allPosts, dispatch, "OLD_FIRST")}
          >
            Oldest
          </button>
        </div>
        {filteredPost
          .filter((ele) => ele.username !== user.username)
          .map((post) => (
            <Postcard post={post} key={post._id} />
          ))}
      </Feed>
    </Homepage>
  );
};

export { Explorepage };
