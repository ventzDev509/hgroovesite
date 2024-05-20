import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./css/drop.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error_toast from "../../toster/error";
import { Toaster } from "react-hot-toast";
import icons from "../../../assets/ressouces/undraw_happy_music_g6wc.svg";
import { useDataContext_user } from "../../dataProvider/user";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "../../loader/loader";

// Styles for thumbnails container and thumbnails
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  width: 120,
  margin: "auto",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  margin: "auto",
  marginBottom: 8,
  marginRight: 8,
  width: 120,
  height: 120,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Cover_song(props) {
  const navigation = useNavigate();
  const [files, setFiles] = useState([]);
  const { setCover, song, linkPhp } = useDataContext_user();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  // Render thumbnails for selected images
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  // Upload image on PHP endpoint
  const [isLoad, setIsLoad] = useState(false);
  const nextStape = async () => {
    setIsLoad(true);
    if (thumbs.length > 0) {
      const choosedFile = files[0];
      setCover(files[0].path);
      const formData = new FormData();
      if (choosedFile) {
        formData.append("cover", choosedFile);
        await axios
          .post(`${linkPhp}cover.php`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            if (response.data.rps == "success") {
              setIsLoad(false);
              navigation("/new-song/details");
            } else {
              setIsLoad(false);
              // Handle error response if needed
            }
          })
          .catch((err) => {
            setIsLoad(false);
            // Handle error if request fails
          });
      }
    } else {
      setIsLoad(false);
      Error_toast("Please select a Cover");
    }
  };
  // end

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <form action="" encType="multipart/form-data">
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
                  <input {...getInputProps()} name="cover" />
                  <p>Drop 1 Cover here, or click to select a Cover</p>
                </>
              ) : (
                <>
                  <div style={{ width: "100%" }}>
                    <div style={{ width: "10%", margin: "20px auto" }}>
                      <Loader />
                    </div>
                    <p>Cover Uploading please wait some moment </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
          <Button className="btn" onClick={nextStape}>
            Next
          </Button>
        </div>
      </section>
    </form>
  );
}

export default Cover_song;
