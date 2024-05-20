import { useState } from "react";
import { useForm } from "react-hook-form";
import "./css/style.css"
import { useDataContext_user } from "../dataProvider/user";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Loader from "../loader/loader";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Img_profile from "./img_profile";
function BtnUpdateProfile({ getUserInfos, img }) {
  const [isUpdate_profile, setIsUpdate_profile] = useState(false);
  const { link,linkPhp } = useDataContext_user();
  const [imageURL, setImageURL] = useState("");
  // Destructuring the useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // update the path in the bd
  const updateName = async (data) => {
    await axios
      .post(
        `${link}update-profile`,
        { profile:data },
        {
          headers: {
            Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
          },
        }
      )
      .then((response) => {
        setIsUpdate_profile(false);
        getUserInfos();
      })
      .catch((err) => {
        console.log(err);
        setIsUpdate_profile(false);
      });
  };

  //upload image to folder profile
  const update_Profile = async (data) => {
    const formData = new FormData();
    if (data.cover[0]) {
      setIsUpdate_profile(true);
      formData.append("cover", data.cover[0]);

      await axios
        .post(`${linkPhp}profile.php`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response)
          if (response.data.rps == "success") {
            updateName(data);
          
            setIsUpdate_profile(false);
          } else {
            setIsUpdate_profile(false);
          }
        })
        .catch((err) => {
          setIsUpdate_profile(false);
        });
    }
  };

  const handleImageChange =async (e) => {
    const choosedFile = e.target.files[0];
    const name=e.target.files[0].name
  
    if (choosedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImageURL(reader.result);
      });

      reader.readAsDataURL(choosedFile);
      const formData = new FormData();
      if (choosedFile) {
        setIsUpdate_profile(true);
        formData.append("cover",choosedFile);
  
        await axios
          .post(`${linkPhp}profile.php`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            if (response.data.rps == "success") {
              updateName(name);
              setIsUpdate_profile(false);
            } else {
              setIsUpdate_profile(false);
            }
          })
          .catch((err) => {
            setIsUpdate_profile(false);
          });
      }
    }
  };
  return (
    <>
      <Img_profile img={imageURL ? imageURL : img} />
      <form
        action=""
        encType="multipart/form-data"
        onSubmit={handleSubmit(update_Profile)}
      >
        <label className="update_profile" type="button" htmlFor="file">
          {!isUpdate_profile ? (
            <MdOutlineAddAPhoto className="icons" />
          ) : (
            <>
              <div id="loader-update-profile">
                <Loader />
              </div>
            </>
          )}
          <TextField
            inputProps={{
              accept: "image/*",
            }}
            type="file"
            name="cover"
            style={{ display: "none" }}
            id="file"
            // {...register("cover", { required: "rue" })}
            onChange={handleImageChange}
          />
        </label>
      </form>
    </>
  );
}
export default BtnUpdateProfile;
