import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { LoginForm } from "frontend/styled-component/authStyled";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Invalid email format";
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
          <p htmlFor="email">Email</p>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <br />
          {formik.touched.email && formik.errors.email ? (
            <span className="error__display">{formik.errors.email}</span>
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
            formik.values.email = "test@gmail.com";
            formik.values.password = "test123";
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
