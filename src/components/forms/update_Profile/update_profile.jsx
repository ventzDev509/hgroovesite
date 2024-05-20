import "./css/style.css";
import * as React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import img from "../../../assets/ressouces/undraw_compose_music_re_wpiw.svg";
import SubmitBtn from "../button/submit"; // Importing a custom submit button component
import { useState } from "react"; // Importing useState hook
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Importing toast notifications
import Success_toast from "../../toster/succes";
import Error_toast from "../../toster/error";
import { useDataContext_user } from "../../dataProvider/user";
function Update_profile() {
  const { link } = useDataContext_user();
  // State to manage the registration loading state
  const [isRegistering, setIsRegistering] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const update_profile = async (data) => {
    setIsRegistering(true);
    await axios
      .post(`${link}upgrade`, data, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        if (response.data.message == "Your account has been upgraded") {
          window.location.href = "/dashbord";
          Success_toast(response.data.message);
          setIsRegistering(false);
        } else {
          Error_toast(response.data.message);
          setIsRegistering(false);
        }
      })
      .catch((error) => {
        Error_toast(response.data.message);
        setIsRegistering(false);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div id="update-profile">
        <div className="left">
          <img src={img} alt="" />
        </div>

        <div className="right">
          {/* <Toaster position="top-center" reverseOrder={true} />{" "} */}
          {/* Toast notification component */}
          <form action="" method="get" onSubmit={handleSubmit(update_profile)}>
            {" "}
            {/* Form for login */}
            <div className="item">
              <h2>Connecter Sur HGroove</h2> {/* Heading for login section */}
              {/* Email input */}
              <div className="itemInput">
                <TextField
                  fullWidth
                  label="Date de naissance"
                  className="input"
                  type="date"
                  focused={true}
                  {...register("dateOfBirth", {
                    required: true,
                  })}
                />
                {errors.dateOfBirth &&
                  errors.dateOfBirth.type === "required" && (
                    <p className="errors">dateOfBirth is required</p>
                  )}
              </div>
              {/* Password input */}
              <div className="itemInput">
                <TextField
                  fullWidth
                  label="Lieu de naissance"
                  className="input"
                  type="text"
                  {...register("cityBorn", {
                    required: true,
                    minLength: 1,
                  })}
                />
                {errors.cityBorn && errors.cityBorn.type === "required" && (
                  <p className="errors">cityBorn is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="errors">
                    Password must be at least 10 characters long
                  </p>
                )}
              </div>
              <div className="itemInput">
                <TextField
                  fullWidth
                  label="adress"
                  className="input"
                  {...register("adress", {
                    required: true,
                  })}
                />
                {errors.adress && errors.adress.type === "required" && (
                  <p className="errors">adress is required</p>
                )}
              </div>
              <div className="itemInput">
                <TextField
                  fullWidth
                  label="about"
                  className="input"
                  {...register("about", {
                    required: true,
                  })}
                />
                {errors.about && errors.about.type === "required" && (
                  <p className="errors">about is required</p>
                )}
              </div>
              {/* Submit button */}
              <SubmitBtn isRegistering={isRegistering} txt={"Login"} />
              {/* Link to register page */}
              {/* <Link to={"/register"}>
                <small className="sug">Create an account!</small>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Update_profile;
