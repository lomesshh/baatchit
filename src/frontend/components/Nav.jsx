import React from "react";
import { Button, Navbar } from "frontend/styled-component/navStyled";

const Nav = () => {
  return (
    <div>
      <Navbar>
        <div>
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1649917437/baatchit/baatchit_s8ziaf.png"
            alt="nav-logo"
          />
        </div>
        <div>
          <input type="text" placeholder="Search profile here" />
        </div>
        <div>
          <i class="fa-solid fa-sun"></i>
          <Button>
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Button>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </Navbar>
    </div>
  );
};

export { Nav };
