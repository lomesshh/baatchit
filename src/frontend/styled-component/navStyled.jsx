import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-primary-color);
  border: 2px solid var(--text-primary-color);
  background-color: var(--background-color);
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
`;

export const Navbar = styled.nav`
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

  div:first-child {
    height: 3.2rem;
  }

  div img {
    height: 100%;
    width: 100%;
  }

  div:nth-child(2) {
    width: 50%;
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
`;
