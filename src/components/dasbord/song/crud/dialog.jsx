import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDataContext_user } from "../../../dataProvider/user";
import Loader from "../../../loader/loader";
export default function AlertDialog({ code }) {
  const { deleteSong, open, setOpen, isDelte } = useDataContext_user();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    console.log(code);
  };
  const delete_song = () => {
    deleteSong(code);
  };

  return (
    <>
      <React.Fragment>
        <p variant="outlined" onClick={handleClickOpen}>
          Delete
        </p>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"you really want to delete this song?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              if you delete this song you will lost all likes and listen or
              money from this song.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>cancel</Button>
            <Button onClick={delete_song} autoFocus>
              {isDelte ? <Loader color={"#F1B81E"}  /> : "Delete"}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
