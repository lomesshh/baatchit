import React, { useState } from "react";
import { Button, Navbar } from "frontend/styled-component/navStyled";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar>
        <Link to="/">
          <div className="large__logo">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1649917437/baatchit/baatchit_s8ziaf.png"
              alt="nav-logo"
            />
          </div>
          <div className="small__logo">
            <img
              src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651136132/baatchit/baatchit_t7ddm7.png"
              alt="nav-logo"
            />
          </div>
        </Link>
        {token && (
          <div className="searchBar">
            <input
              type="search"
              placeholder="Search profile here"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            {searchFilter !== "" && (
              <div className="search__user">
                {allUsers
                  .filter((user) => {
                    if (searchFilter === "") {
                      return user;
                    } else if (
                      user.username
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase())
                    ) {
                      return user;
                    }
                  })
                  .map((user) => (
                    <div
                      className="search__userinfo"
                      onClick={() => {
                        setSearchFilter("");
                        navigate(`/user/${user._id}`);
                      }}
                    >
                      <div className="search__userimg">
                        <img src={user.profilePic} />
                      </div>
                      <p>{user.username}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
        <div>
          {!token && (
            <Link to="/login">
              <Button>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                <p>Login</p>
              </Button>
            </Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export { Nav };
