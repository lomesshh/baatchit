import styled from "styled-components";

export const ProfileDiv = styled.div`
  .profile__main {
    width: 70%;
    margin: auto;
    background-color: var(--card-background);
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    margin-top: 0.7rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;
    display: flex;

    .profile__img {
      width: 30%;

      .image__outer {
        height: 120px;
        width: 120px;
        margin: 0 auto;

        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          border: 1px solid gray;
        }
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .profile__info {
      width: 70%;
      margin: 0rem 0.4rem;

      .profile__edit {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        .follow__button {
          border-radius: 5px;
          font-size: 1rem;
        }

        &:hover .follow__button {
          background-color: var(--text-primary-color);
          color: var(--background-color);
          border: 1px solid var(--text-primary-color);
        }

        button {
          padding: 0.3rem 0.5rem;
          font-size: 1.2rem;
          border-radius: 50%;
          border: 1px solid var(--text-primary-color);
          background-color: var(--background-color);
          i {
            color: var(--text-primary-color);
          }
        }
      }

      .profile__stats {
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0rem;
        cursor: pointer;
      }

      .profile__bio {
        margin: 0.5rem 0rem;
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    @media (max-width: 1390px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 420px) {
      width: 90%;
    }

    @media (max-width: 360px) {
      font-size: 0.8rem;
    }
  }

  .post__heading {
    text-align: center;
    margin-bottom: 1rem;
  }

  .not__found {
    margin-top: 5rem;
    text-align: center;
  }
`;
