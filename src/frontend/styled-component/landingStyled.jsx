import styled from "styled-components";

export const Landing = styled.div`
  position: relative;
  .main {
    width: 80%;
    margin: 0 auto;
    padding-top: 75px;
    display: flex;
    justify-content: space-between;
    min-height: 88vh;

    .landing__info {
      width: 50%;
      margin: auto;

      h1 {
        color: black;
        font-size: 3rem;
        font-weight: 800;
        margin: 1rem 0rem;

        span {
          color: var(--text-primary-color);
        }
      }

      h2,
      h4 {
        margin-bottom: 0.3rem;
      }

      .signup__button {
        padding: 0.5rem 1.2rem;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 1rem;
        margin-left: 0rem;
        border: 1px solid var(--background-color);
        background-color: var(--text-primary-color);
        color: var(--background-color);
        border-radius: 5px;
      }

      .login__button {
        padding: 0.5rem 1.2rem;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 1rem;
        margin-left: 0rem;
        border: 1px solid var(--text-primary-color);
        background-color: var(--background-color);
        color: var(--text-primary-color);
        border-radius: 5px;
      }

      .login__button:hover {
        border: 1px solid var(--background-color);
        background-color: var(--text-primary-color);
        color: var(--background-color);
      }

      @media (max-width: 950px) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 500px) {
        width: 70%;
      }
    }

    .landing__img {
      width: 50%;

      img {
        height: 90%;
        width: 100%;
      }

      @media (max-width: 950px) {
        width: 80%;
        margin: auto;
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;
