import React, { useState } from "react"; // Import React and useState hook
import TextField from "@mui/material/TextField";
import "./css/register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import SubmitBtn from "./button/submit";
import { useDataContext_user } from "../dataProvider/user";
export default function Register() {
  const {link}= useDataContext_user()
  // Destructure useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to manage registration loading state
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to handle registration form submission
  const onRegister = (data) => {
    if (data) {
      setIsRegistering(true); // Set registering state to true when form is submitted

      axios
        .post(`${link}register`, data)
        .then((response) => {
          // Handle successful registration
          toast.success(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            duration: 4000,
            id: "clipboard",
          });
        })
        .catch((error) => {
          // Handle registration error
          toast.error(error.response.data.message, {
            style: {
              borderRadius: "10px",
              background: "#F1B81E",
              color: "#000",
            },
            duration: 4000,
            id: "clipboard",
          });
        })
        .finally(() => {
          setIsRegistering(false); // Reset registering state after registration attempt
        });
    }
  };

  return (
    <>
      <div id="register">
        <Toaster position="top-center" reverseOrder={true} />

        {/* Registration form */}
        <form action="" onSubmit={handleSubmit(onRegister)}>
          <div className="item">
            <h2>Register on HGroove</h2>

            {/* Username input */}
            <div className="itemInput">
              <TextField
                fullWidth
                label="Username"
                className="input"
                {...register("username", {
                  required: true,
                  pattern: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
                })}
              />
              {errors.username && errors.username.type === "required" && (
                <p className="errors">Please enter a username</p>
              )}
              {errors.username && errors.username.type === "pattern" && (
                <p className="errors">
                  Username must not start with a number, space, or special
                  character
                </p>
              )}
            </div>

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
                  minLength: 10,
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

            {/* Register button */}
            <SubmitBtn isRegistering={isRegistering} txt={"Register"} />

            {/* Link to login */}
            <Link to={"/Login"}>
              <small className="sug">Already have an account? Log in!</small>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
