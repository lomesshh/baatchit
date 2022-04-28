import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  line-height: 1.3;
  width: 80%;
  height: 95vh;
  padding-top: 75px;

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: var(--background-color);
    padding: 2rem 3rem;
    box-shadow: var(--box-shadow) 0px 0px 0.25em,
      rgba(255, 255, 255, 0.05) 0px 0.25em 1em;
    border-radius: 15px;
    /* position: sticky; */
    /* top: 7rem; */
  }

  .signup__outer {
    margin-top: 1rem;
    margin-bottom: 3.5rem;
  }

  .error__display {
    color: red;
  }

  .matched__display {
    color: green;
  }

  .login__title {
    color: var(--primary-color);
    margin-bottom: 3%;
  }

  .login__fields p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 10%;
  }

  .login__fields input {
    padding-top: 0.8rem;
    background-color: var(--background-color);
    border: none;
    border-bottom: 1.5px solid var(--text-primary-color);
    outline: none;
    font-size: 1.1rem;
  }

  .login__remember {
    margin: 0.8rem;
    cursor: pointer;
  }

  .login__button {
    padding: 0.5rem 0;
    margin: 10% 0 0 0;
    border-radius: 5px;
    border: none;
    color: var(--background-color);
    background-color: var(--text-primary-color);
    cursor: pointer;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
  }

  .signup {
    padding: 1rem 3rem;
  }

  .signup .login__title {
    margin-bottom: 1%;
  }

  .signup .login__button {
    margin-bottom: 1rem;
  }

  .signup input {
    padding-top: 0.2rem;
  }
`;
