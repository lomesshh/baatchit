import { Landing } from "frontend/styled-component/landingStyled";
import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <Landing>
      <div className="main">
        <div className="landing__info">
          <h1>
            BAAT<span>CHIT</span>
          </h1>
          <h2>The Best Social App To Make New Friends</h2>
          <h4>Find People With The Same Interest As You</h4>
          <div>
            <Link to="/signup">
              <button className="signup__button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="login__button">Log In</button>
            </Link>
          </div>
        </div>
        <div className="landing__img">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651120352/baatchit/Followers_2_mmf2vs.gif"
            alt="landing__img"
          />
        </div>
      </div>
    </Landing>
  );
};

export { Landingpage };
