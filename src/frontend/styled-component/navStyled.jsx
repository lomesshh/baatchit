import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  margin-left: 0.3rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-primary-color);
  border: 2px solid var(--text-primary-color);
  background-color: var(--background-color);

  p {
    color: var(--text-primary-color);
    background-color: var(--background-color);

    @media (max-width: 500px) {
      display: none;
    }
  }

  &:hover p {
    color: var(--background-color);
    background-color: var(--text-primary-color);
  }

  &:hover {
    color: var(--background-color);
    background-color: var(--text-primary-color);
  }
  i {
    color: var(--text-primary-color);
    margin-right: 0.3rem;
  }
  &:hover i {
    color: var(--background-color);
  }

  @media (max-width: 510px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
  }
`;

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: var(--card-background);
  font-size: 1.2rem;
  padding: 0.5rem 0.6rem;
  box-shadow: 0 4px 6px -5px var(--box-shadow);
  overflow: hidden;
  position: fixed;
  z-index: 1;

  .large__logo {
    height: 3.2rem;

    @media (max-width: 650px) {
      display: none;
    }
  }

  div img {
    height: 100%;
    width: 100%;
  }

  .small__logo {
    display: none;

    img {
      height: 100%;
      width: 100%;
    }

    @media (max-width: 650px) {
      display: block;
      height: 3.2rem;
      width: 90% !important;
    }
  }

  .searchBar {
    width: 50%;

    @media (max-width: 500px) {
      width: 60%;
    }
  }

  div:nth-child(2) input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    width: 100%;
    margin-top: 0.4rem;
    outline: none;
    border: 1px solid var(--text-primary-color);
    border-radius: 5px;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  div:nth-child(3) > i {
    margin-right: 1rem;
    font-size: 1.4rem;
    color: var(--text-primary-color);
  }

  .search__user {
    width: inherit;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    background-color: var(--background-color);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
    border-radius: 10px;

    .search__userinfo {
      display: flex;
      margin: 0.5rem 0 0.5rem 0;
      cursor: pointer;
    }

    .search__userimg {
      height: 3rem;
      width: 3rem;

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 1px solid gray;
      }
    }
  }
`;
