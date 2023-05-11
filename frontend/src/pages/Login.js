import React, { useState } from "react";
import logo from "../assets/images/loginLogo.png";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader";

const Login = () => {
  const [inputData, setInputData] = useState({});
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loginUser, { loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    let error = false;

    if (inputData && (!inputData.email || inputData.email === "")) {
      error = true;
      setEmailError("Enter your email");
    }

    if (inputData && inputData.email && inputData.email !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(inputData.email)) {
        error = true;
        setEmailError("Enter a valid email address");
      }
    }

    if (inputData && (!inputData.password || inputData.password === "")) {
      error = true;
      setPasswordError("Enter your password");
    }

    if (!error) {
      setEmailError(null);
      setPasswordError(null);
      loginUser({
        variables: {
          email: inputData.email,
          password: inputData.password,
        },
      })
        .then(({ data }) => {
          if (data && data.login && data.login.token) {
            JSON.stringify(localStorage.setItem("token", data.login.token));
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log({ err });
        });
      return;
    }
  };

  return (
    <div className="wraper-div">
      {loading && <Loader />}

      {error && (
        <div className="error-container">
          <div className="error">{error.message}</div>
        </div>
      )}

      <div className="logoSection">
        <img src={logo} alt="goodReads" />
      </div>
      <div className="loginInnerContent">
        <div className="signup">
          <h1>Sign in</h1>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={
                emailError == null
                  ? "form-control w-100"
                  : "form-control w-100 input-error"
              }
              id="email"
              name="email"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            {emailError && <p className="a-alert-content">Enter your email</p>}
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={
                passwordError == null
                  ? "form-control w-100"
                  : "form-control w-100 input-error"
              }
              id="password"
              name="password"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            {passwordError && (
              <p className="a-alert-content">Enter your password</p>
            )}
          </div>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="button"
            className="createbtn"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
