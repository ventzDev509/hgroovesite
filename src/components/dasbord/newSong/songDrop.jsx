import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDataContext_user } from "../../dataProvider/user";
import "./css/drop.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import icons from "../../../assets/ressouces/undraw_happy_music_g6wc.svg";
import Error_toast from "../../toster/error";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Loader from "../../loader/loader";

function Song_drop_file() {
  const navigation = useNavigate();

  // Setup Dropzone to accept only .mp3 files
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "audio/mp3": [".mp3"],
    },
    maxFiles: 1,
  });

  // Access user data context and setSong function
  const { setSong, linkPhp } = useDataContext_user();

  // Map accepted files to display file details
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // Function to handle next step
  const [isLoad, setIsLoad] = useState(false);
  const nextStape = async () => {
    setIsLoad(true);
    if (files.length > 0) {
      const choosedFile = acceptedFiles[0];
      setSong(files[0].key);
      const formData = new FormData();
      if (choosedFile) {
        formData.append("song", choosedFile);
        // Send file to backend for processing
        await axios
          .post(`${linkPhp}song.php`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            if (response.data.rps == "success") {
              setIsLoad(false);
              // Navigate to the next step upon success
              navigation("/new-song/cover");
            } else {
              setIsLoad(false);
              // Show error toast if response indicates failure
              Error_toast(response.data.rps);
            }
          })
          .catch((err) => {
            setIsLoad(false)
            console.log(err);
          });
      }
    } else {
      // Show error toast if no file is selected
      Error_toast("Please select a Song");
      setIsLoad(false)
    }
  };

  return (
    <section
      className="container"
      id="drop-file"
      style={{ background: `url(${icons})`, backgroundRepeat: "no-repeat" }}
    >
      <Toaster position="top-center" reverseOrder={true} />
      <div className="drop">
        <div {...getRootProps({ className: "dropzone" })} className="div">
          <div>
            {!isLoad ? (
              <>
                <input {...getInputProps()} />
                <p>drop 1 file here, or click to select file accept [ mp3 ] </p>
              </>
            ) : (
              <>
                <div style={{ width: "100%" }}>
                  <div style={{ width: "10%", margin: "20px auto" }}>
                    <Loader />
                  </div>
                  <p>Song Uploading please wait some moment </p>
                </div>
              </>
            )}
          </div>
        </div>
        <aside>{files && <small>{files}</small>}</aside>
        {/* Button to trigger next step */}
        <Button className="btn" onClick={nextStape}>
          next
        </Button>
      </div>
    </section>
  );
}

export default Song_drop_file;
