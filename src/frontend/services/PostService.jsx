import axios from "axios";
import { Notify } from "frontend/components";
import { v4 as uuid } from "uuid";
import {
  getPosts,
  toggleLoader,
  getAllUsersPost,
  createAPost,
  editAPost,
  deleteAPost,
  likeAPost,
  dislikeAPost,
  getSavedPost,
  saveAPoast,
  unSaveAPoast,
  setFilteredPost,
} from "frontend/redux/Slices/PostSlice";

export const getAllPost = (filterType) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/posts");
      await dispatch(getPosts(res.data.posts));
      setFilteredPostData(res.data.posts, dispatch, "NEW_FIRST");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersPost = (userName, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const response = await axios.get(`/api/posts/user/${userName}`, {
        headers: { authorization: token },
      });
      dispatch(getAllUsersPost(response.data.posts));
      dispatch(toggleLoader(false));
    } catch (error) {
      dispatch(toggleLoader(false));
      console.log(error);
    }
  };
};

export const createPost = (post, token, inputImage) => {
  let tempObj = { ...post };
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const data = new FormData();
      data.append("file", inputImage);
      data.append("upload_preset", "cvj0uqih");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          tempObj = { ...tempObj, imgSrc: json.url };
        })
        .catch((error) => {
          console.log(error);
          Notify("Image uploading failed", "error");
        });
      const res = await axios.post(
        "/api/posts",
        { tempObj },
        {
          headers: { authorization: token },
        }
      );
      dispatch(createAPost(res.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post created successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to create post", "error");
    }
  };
};

export const editPost = (postDetail, postId, token, inputImage) => {
  let post = { ...postDetail };
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const data = new FormData();
      data.append("file", inputImage);
      data.append("upload_preset", "cvj0uqih");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch(
        "https://api.cloudinary.com/v1_1/dgwzpbj4k/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          post = { ...post, imgSrc: json.url };
        })
        .catch((error) => {
          console.log(error);
          Notify("Image uploading failed", "error");
        });
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { post },
        {
          headers: { authorization: token },
        }
      );
      dispatch(editAPost(response.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post updated successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to update post", "error");
    }
  };
};

export const deletePost = (postId, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      dispatch(deleteAPost(res.data.posts));
      dispatch(toggleLoader(false));
      Notify("Post deleted successfully", "warning");
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to delete post", "error");
    }
  };
};

export const likePost = (post, user, postId, token, filterType) => {
  const findUserInLikes = post.likes.likedBy.findIndex(
    (char) => char.username === user.username
  );

  return async (dispatch) => {
    dispatch(toggleLoader(true));
    if (findUserInLikes === -1) {
      try {
        const res = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        Notify("You liked a post", "success");
        await dispatch(likeAPost(res.data.posts));
        if (filterType != "") {
          setFilteredPostData(res.data.posts, dispatch, filterType);
        }
        dispatch(toggleLoader(false));
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to like post", "error");
        console.log(error);
      }
    } else {
      try {
        dispatch(toggleLoader(true));
        const res = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        dispatch(dislikeAPost(res.data.posts));
        dispatch(toggleLoader(false));
        Notify("You disliked a post", "info");
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to dislike post", "error");
        console.log(error);
      }
    }
  };
};

export const savePost = (savedPost, post, postId, token) => {
  const findUserInSaved = savedPost.findIndex((ele) => ele === post._id);

  return async (dispatch) => {
    dispatch(toggleLoader(true));
    if (findUserInSaved === -1) {
      try {
        const res = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        Notify("Post saved Successfully", "success");
        dispatch(saveAPoast(res.data.bookmarks));
        dispatch(toggleLoader(false));
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to save post", "error");
        console.log(error);
      }
    } else {
      try {
        dispatch(toggleLoader(true));
        const res = await axios.post(
          `/api/users/remove-bookmark/${postId}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        dispatch(unSaveAPoast(res.data.bookmarks));
        dispatch(toggleLoader(false));
        Notify("Post removed from bookmarks", "info");
      } catch (error) {
        dispatch(toggleLoader(false));
        Notify("Unable to remove post from bookmarks", "error");
        console.log(error);
      }
    }
  };
};

export const getAllSavedPost = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      dispatch(getSavedPost(res.data.bookmarks));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFilteredPostData = (allPosts, dispatch, type) => {
  switch (type) {
    case "TRENDING":
      let tempPosts1 = allPosts.filter((post) => post.isTrending);
      dispatch(setFilteredPost({ posts: tempPosts1, type: type }));
      break;
    case "NEW_FIRST":
      let tempPosts2 = allPosts
        .slice()
        .sort((a, b) =>
          b.creationDate
            .split("/")
            .reverse()
            .join()
            .localeCompare(a.creationDate.split("/").reverse().join())
        );
      dispatch(setFilteredPost({ posts: tempPosts2, type: type }));
      break;
    case "OLD_FIRST":
      let tempPosts3 = allPosts
        .slice()
        .sort((a, b) =>
          a.creationDate
            .split("/")
            .reverse()
            .join()
            .localeCompare(b.creationDate.split("/").reverse().join())
        );
      dispatch(setFilteredPost({ posts: tempPosts3, type: type }));
      break;
    default:
      dispatch(setFilteredPost(allPosts));
      break;
  }
};

export const addCommentHandler = (user, commentStatement, postId, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const comment = {
        _id: uuid(),
        userId: user?._id,
        username: user?.username,
        comment: commentStatement,
        profilePic: user?.profilePic,
        reply: [],
      };
      const res = await axios.post(
        `/api/post/comment/${postId}`,
        {
          comment,
        },
        {
          headers: { authorization: token },
        }
      );
      dispatch(getPosts(res.data.posts));
      Notify("Comment added", "success");
      dispatch(toggleLoader(false));
    } catch (error) {
      console.log(error);
      Notify("Unable to add comment", "error");
      dispatch(toggleLoader(false));
    }
  };
};

export const deleteCommentHandler = (commentId, postId, token) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    try {
      const res = await axios.post(
        `/api/post/commentdelete/${postId}/${commentId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      dispatch(getPosts(res.data.posts));
      Notify("Comment deleted", "success");
      dispatch(toggleLoader(false));
    } catch (error) {
      console.log(error);
      Notify("Unable to delete comment", "error");
      dispatch(toggleLoader(false));
    }
  };
};
