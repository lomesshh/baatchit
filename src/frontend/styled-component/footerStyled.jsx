import styled from "styled-components";

export const Footerdiv = styled.footer`
  padding: 2rem 0rem 1rem 0rem;
  background-color: var(--background-color);
  box-shadow: 0px -2px 3px -1px var(--box-shadow);

  .footer__flex {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .footer__social {
    margin-right: 2%;
  }

  .footer__text {
    margin-left: 2%;
    width: 50%;

    @media (max-width: 600px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .footer__text h2 {
    color: var(--text-color);
  }

  .footer__text h2 span {
    color: var(--primary-color);
  }

  .footer__social a {
    margin: 0 0.6rem;
  }

  .footer__social i {
    color: var(--primary-color);
  }

  .fooeter_heart {
    color: crimson !important;
    text-shadow: 0 0 0.5rem crimson;
    transition: all 0.5s ease;
  }

  .fa-github:hover {
    color: #000000;
    text-shadow: 0 0 0.9rem #000000;
    transition: all 0.5s ease;
  }

  .fa-linkedin:hover {
    color: rgb(63, 98, 145);
    text-shadow: 0 0 0.5rem rgb(68, 119, 185);
    transition: all 0.5s ease;
  }

  .fa-twitter:hover {
    color: rgb(74, 174, 241);
    text-shadow: 0 0 0.5rem rgb(74, 174, 241);
    transition: all 0.5s ease;
  }
`;
