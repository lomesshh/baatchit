import styled from "styled-components";

export const Feed = styled.div`
  h1 {
    text-align: center;
    margin: 1rem;
  }
  .single__post {
    margin-top: 2rem;
  }
  .inputComment {
    width: 70%;
    margin: auto;

    h3 i {
      margin-left: 1rem;
      cursor: pointer;
    }

    input {
      width: 60%;
      padding: 0.5rem 1rem;
      background-color: var(--background-color);
      border: 1px solid var(--text-primary-color);
      outline: none;
      margin: 0.5rem 1rem 1rem 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--background-color);
      background-color: var(--text-primary-color);
      color: var(--background-color);
      cursor: pointer;
    }
  }

  .disply__comment {
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 5px 0px;
    background-color: var(--card-background);
    width: 70%;
    margin: auto;
    margin-bottom: 4rem;
    padding: 0.6rem 0.5rem;

    .commentSection {
      display: flex;
      justify-content: space-between;
      margin: 0.3rem 0.7rem;

      .comment_pic {
        height: 30px;
        width: 30px;
        display: flex;

        img {
          border-radius: 50%;
          border: 1px solid gray;
          height: 100%;
          width: 100%;
          margin-right: 0.4rem;
        }
      }
    }
  }
`;

export const PostCard = styled.div`
  width: 70%;
  margin: auto;
  background-color: var(--card-background);
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;

  .profile__info {
    display: flex;
    padding-bottom: 0.3rem;
    box-shadow: 0 4px 6px -5px var(--box-shadow);
  }

  .profile__info h3 {
    margin-left: 0.5rem;
    margin-top: 0.4rem;
  }

  .profile__image {
    height: 4rem;
    width: 4rem;
  }

  .profile__image img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .post__image span {
    height: 100%;
    width: 100%;
  }

  .post__image span img {
    height: 100%;
    width: 100%;
  }

  .post__info {
    padding: 0.3rem 0rem;

    h4 {
      margin: 0.2rem 0rem;
    }
  }

  .button__options {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .button__left {
    display: flex;

    i {
      margin-right: 1.5rem;
    }

    .liked__post,
    .saved__post {
      color: var(--text-primary-color);
    }
  }

  .button__right {
    display: flex;

    i {
      margin-right: 1rem;
    }
  }
`;
