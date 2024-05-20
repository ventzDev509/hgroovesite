import * as React from "react";
import TextField from "@mui/material/TextField";
import "./css/register.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SubmitBtn from "./button/submit"; // Importing a custom submit button component
import toast, { Toaster } from "react-hot-toast"; // Importing toast notifications
import { useState } from "react"; // Importing useState hook
import axios from "axios"; // Importing Axios for HTTP requests
import { useLocation } from "react-router-dom";
import { useDataContext_user } from "../dataProvider/user";
import Success_toast from "../toster/succes";
import Error_toast from "../toster/error";

function Login() {
  const { link } = useDataContext_user();
  const navigation = useNavigate();
  let location = useLocation();
  window.addEventListener("popstate", function (event) {
    // Vérifier si l'URL actuelle est "/login"
    if (location.pathname === "/Login" || location.pathname === "/login") {
      // Rediriger l'utilisateur vers "/"
      this.window.location.href = "/";
    }
  });

  // Destructuring the useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to manage the registration loading state
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to handle the login form submission
  const onLogin = (data) => {
    if (data) {
      setIsRegistering(true); // Setting the registering state to true when the form is submitted
      axios
        .post(`${link}login`, data) // Making a POST request to login endpoint
        .then((response) => {
          setIsRegistering(false);
          localStorage.setItem("token_hg", response.data.token); // Storing the token in local storage
          if (response.data.message == "Email or Password is incorrect") {
            Success_toast(response.data.error);
          } else if (response.data.message == "Login successfully") {
            navigation("/profile");
          } else {
            // Handling successful login
            Success_toast(response.data.error);
          }
        })
        .catch((error) => {
          // Handling login error
          Error_toast(error.response.data.error);
          setIsRegistering(false);
        });
    }
  };

  return (
    <>
      <div id="register">
        <Toaster position="top-center" reverseOrder={true} />
        {/* Toast notification component */}
        <form action="" method="get" onSubmit={handleSubmit(onLogin)}>
          {" "}
          {/* Form for login */}
          <div className="item">
            <h2>Connecter Sur HGroove</h2> {/* Heading for login section */}
            {/* Email input */}
            <div className="itemInput">
              <TextField
                fullWidth
                label="Email"
                className="input"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errors">Email is required</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errors">Email is not valid</p>
              )}
            </div>
            {/* Password input */}
            <div className="itemInput">
              <TextField
                fullWidth
                label="Password"
                className="input"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 1,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="errors">Password is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="errors">
                  Password must be at least 10 characters long
                </p>
              )}
            </div>
            {/* Submit button */}
            <SubmitBtn isRegistering={isRegistering} txt={"Login"} />
            {/* Link to register page */}
            <Link to={"/register"}>
              <small className="sug">Create an account!</small>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
