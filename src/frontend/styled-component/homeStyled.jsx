import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  min-height: 90vh;
  position: relative;

  .sidebar {
    width: 250px;
    overflow: hidden;
    position: sticky;
    align-self: flex-start;
    top: 75px;

    .user__profile {
      display: flex;
      height: 5rem;
      border-bottom: 1px solid gray;

      .user__image {
        width: 28%;
        height: 4rem;
        margin: 0.3rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid gray;
        }

        @media (max-width: 600px) {
          width: 90%;
          height: 4rem;
          margin: 0.3rem;
        }
      }

      .user__info {
        width: 72%;
        margin-top: 0.5rem;
        margin-left: 0.4rem;

        p {
          font-size: 0.8rem;
        }
        @media (max-width: 600px) {
          display: none;
        }
      }
    }

    .sidebar__option {
      font-size: 1.2rem;

      .notactive {
        width: 100%;
        border: none;
        background-color: var(--background-color);
        border-bottom: 3px solid var(--background-color);
        cursor: pointer;
      }

      .activetab {
        border-bottom: 3px solid var(--text-primary-color);
        width: 100%;
        color: var(--text-primary-color);
        background-color: var(--background-color);
        cursor: pointer;
      }

      p {
        cursor: pointer;
        color: inherit;
        display: flex;
        align-items: center;

        i {
          margin-right: 0.3rem;
          margin: 0.8rem;
          color: inherit;

          @media (max-width: 600px) {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem;
            font-size: 1.4rem;
          }
        }

        p {
          @media (max-width: 600px) {
            display: none;
          }
        }
      }

      .modal__input {
        padding: 0.3rem 1rem;
        margin: 0.5rem;
        outline: none;
        color: var(--background-color);
      }

      .modal__button {
        padding: 0.3rem 1rem;
      }
    }
    .modal__input {
      padding: 0.3rem 1rem;
      margin: 0.5rem;
      outline: none;
      color: var(--background-color);
    }

    .modal__button {
      padding: 0.3rem 1rem;
    }

    @media (max-width: 600px) {
      width: 70px;
    }
  }

  .main {
    box-shadow: inset 5px 0 5px -5px var(--box-shadow),
      inset -5px 0 5px -5px var(--box-shadow);
    width: 60%;
    overflow: hidden;
    position: relative;
    top: 75px;

    @media (max-width: 1000px) {
      box-shadow: inset 5px 0 5px -5px var(--box-shadow);
      width: 100%;
    }
  }

  .suggestions {
    width: 300px;
    padding: 0.5rem 0.5rem;
    overflow: hidden;
    position: sticky;
    align-self: flex-start;
    top: 75px;
    h3 {
      margin-bottom: 0.5rem;
    }

    .sortby {
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: 0.5rem;
      }

      button {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 0.5rem;
        padding: 0.1rem 0rem;
        font-size: 1.2rem;
        background-color: var(--background-color);
        border: 1px solid var(--text-primary-color);
        border-radius: 6px;
        color: var(--text-primary-color);
      }
    }

    .user__profile {
      display: flex;
      height: 5rem;

      a {
        display: flex;
        width: 80%;

        .user__image {
          width: 25%;
          height: 4rem;
          margin: 0.3rem;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid gray;
          }
        }
        .user__info {
          width: 50%;
          margin-top: 0.5rem;
          margin-left: 0.4rem;

          p {
            font-size: 0.8rem;
            margin-top: 0.2rem;
          }
        }
      }

      .user__button {
        width: 20%;
        align-self: center;

        button {
          padding: 0.3rem 0.5rem;
          color: var(--text-primary-color);
          border-radius: 5px;
          border: 1px solid var(--text-primary-color);
          background-color: var(--background-color);
          &:hover {
            color: var(--background-color);
            background-color: var(--text-primary-color);
          }
        }
      }
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Createpost = styled.div`
  display: flex;
  flex-direction: column;

  .user__profile {
    display: flex;
    width: 18rem;
    height: 5rem;
    padding-right: 2rem;
    margin: 0.3rem 0rem;
    cursor: pointer;
    box-shadow: var(--box-shadow) 0px 1px 1px 0px,
      var(--box-shadow) 0px 1px 2px 1px;

    .user__image {
      width: 25%;
      height: 4rem;
      margin: 0.3rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid gray;
      }
    }

    .user__info {
      width: 50%;
      margin-top: 0.5rem;
      margin-left: 0.4rem;

      p {
        font-size: 0.8rem;
        margin-top: 0.2rem;
      }
    }

    .user__button {
      width: 25%;
      align-self: center;

      button {
        padding: 0.3rem 0.5rem;
        color: var(--text-primary-color);
        border-radius: 5px;
        border: 1px solid var(--text-primary-color);
        background-color: var(--background-color);
        &:hover {
          color: var(--background-color);
          background-color: var(--text-primary-color);
        }
      }
    }
  }

  h3 {
    text-align: center;
  }

  .emoji__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
  }

  .fa-face-grin {
    font-size: 1.4rem;
    color: var(--text-primary-color);
    margin: 0.5rem;
  }

  [type="file"] {
    width: 13rem;
  }

  [type="file"]::-webkit-file-upload-button {
    background: var(--text-primary-color);
    border: 2px solid var(--text-primary-color);
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
    text-transform: uppercase;
    transition: all 0.5s ease;
  }

  [type="file"]::-webkit-file-upload-button:hover {
    background: var(--background-color);
    border: 2px solid var(--text-primary-color);
    color: var(--text-primary-color);
  }

  .modal__input {
    padding: 0.3rem 1rem;
    margin: 0.5rem;
    outline: none;
    border: 1px solid var(--text-primary-color);
  }

  .modal__button {
    padding: 0.3rem 1rem;
    margin: 0.5rem;
    border: none;
    color: var(--background-color);
    background-color: var(--text-primary-color);
    font-size: 1rem;
  }
`;
