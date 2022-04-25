import styled from "styled-components";

export const Feed = styled.div`
  h1 {
    text-align: center;
    margin: 1rem;
  }
  .single__post {
    margin-top: 2rem;
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
    padding: 0.2rem;
    border: 1px solid gray;
  }

  .post__image {
    height: 100%;
    width: 100%;
  }

  .post__image img {
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
  }

  .button__right {
    display: flex;

    i {
      margin-right: 1rem;
    }
  }
`;
