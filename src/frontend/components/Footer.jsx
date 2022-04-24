import React from "react";
import { Footerdiv } from "frontend/styled-component/footerStyled";

const Footer = () => {
  return (
    <Footerdiv className="footer">
      <div className="footer__flex">
        <div className="footer__text">
          <h2>
            Made with <i className="fas fa-heart fooeter_heart"></i> by Lomesh
          </h2>
        </div>
        <div className="footer__social">
          <a href="https://github.com/lomesshh">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/lomesshh/">
            <i className="fab fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/lomesshh">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </Footerdiv>
  );
};

export { Footer };
