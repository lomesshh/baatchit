import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "frontend/styled-component/authStyled";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "frontend/services/AuthService";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(handleUserLogin(values, navigate, "/home/feed"));
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");

  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "fa-solid fa-eye"
      ? setIcon("fa-solid fa-eye-slash")
      : setIcon("fa-solid fa-eye");
  };

  return (
    <LoginForm className="login__outer">
      <form className="login" onSubmit={formik.handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <div className="login__fields">
          <p htmlFor="username">username</p>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
          />
          <br />
          {formik.touched.username && formik.errors.username ? (
            <span className="error__display">{formik.errors.username}</span>
          ) : null}
          <p htmlFor="password">Password</p>
          <input
            type={type}
            placeholder="Enter password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <i onClick={show} className={icon}></i>

          <br />
          {formik.touched.password && formik.errors.password ? (
            <span className="error__display">{formik.errors.password}</span>
          ) : null}
        </div>
        <button
          className="login__button"
          type="submit"
          onClick={() => {
            formik.values.username = "adarshbalika";
            formik.values.password = "adarshBalika123";
          }}
        >
          Test credentials
        </button>
        <button className="login__button" type="submit">
          Log in
        </button>
        <div className="login__remember">
          <input type="checkbox" /> <lable> Remember me</lable>
        </div>
        <p>
          Don't have an account ?<Link to="/signup"> SignUp</Link>
        </p>
      </form>
    </LoginForm>
  );
};

export { Login };
