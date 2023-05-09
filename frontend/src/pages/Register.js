import React, { useState } from "react";
import logo from "../assets/images/loginLogo.png";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [inputData, setInputData] = useState({});
  const [errors, setErrors] = useState([]);
  const [registerUser] = useMutation(REGISTER);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    let error = false;
    let errorList = [];
    if (inputData && (!inputData.name || inputData.name === "")) {
      error = true;
      errorList.push("Enter your name");
    }

    if (inputData && (!inputData.email || inputData.email === "")) {
      error = true;
      errorList.push("Enter your email");
    }

    if (inputData && inputData.email && inputData.email !== "") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(inputData.email)) {
        error = true;
        errorList.push("Enter a valid email address");
      }
    }

    if (inputData && (!inputData.password || inputData.password === "")) {
      error = true;
      errorList.push("Enter your password");
    }

    if (
      inputData &&
      inputData.password &&
      inputData.password !== inputData.confirmPassword
    ) {
      error = true;
      errorList.push("Password must match");
    }

    if (!error) {
      const { data } = await registerUser({
        variables: {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password,
          confirmPassword: inputData.confirmPassword,
        },
      });
      if (data && data.register && data.register.user) {
        JSON.stringify(localStorage.setItem("token", data.register.token));
        navigate("/home");
      }
    } else {
      console.log({ errorList });
      setErrors(errorList);
    }
  };

  return (
    <div className="wraper-div">
      <div className="logoSection">
        <img src={logo} alt="goodReads" />
      </div>
      <div className="loginInnerContent">
        <div className="signup">
          <h1>Create Account</h1>
          <div>
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="name"
              placeholder="First and last name"
              name="name"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="email"
              name="email"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control w-100"
              placeholder="At Least 6 characters"
              id="password"
              name="password"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            <p className="a-alert-content">
              Passwords must be at least 6 characters.
            </p>
          </div>
          <div>
            <label htmlFor="re-password" className="form-label">
              Re-enter password
            </label>
            <input
              type="password"
              className="form-control w-100"
              id="re-password"
              name="confirmPassword"
              onChange={(e) => {
                handleOnChange(e);
              }}
              autoComplete="false"
            />
          </div>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="button"
            className="createbtn"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
