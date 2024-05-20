import { Button, TextField } from "@mui/material";
import Tag_arist_input from "./inputTag";
import { useForm } from "react-hook-form";
import icons from "../../../assets/ressouces/undraw_happy_music_g6wc.svg";
import { useDataContext_user } from "../../dataProvider/user";
import { Toaster } from "react-hot-toast";
import SelectGenre from "./selectGenre";
function Song_details() {
  const { addNewSong, setSongTitle, setDateCreate, setDescription } =
    useDataContext_user();
  // Destructuring the useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />

      <form
        action=""
        id="form-detail-song"
        style={{ background: `url(${icons})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="item">
          <h2>Song details </h2>
          <TextField
            fullWidth
            placeholder="Titre"
            className="input"
            required
            onChange={(e) => setSongTitle(e.target.value)}
          />

          <TextField
            fullWidth
            placeholder="date created"
            className="input"
            type="date"
            required={true}
            onChange={(e) => setDateCreate(e.target.value)}
          />
          <SelectGenre />
          <TextField
            fullWidth
            placeholder="Description"
            className="input"
            required={true}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Tag_arist_input />
          <Button className="btn" onClick={addNewSong}>
            Enregistrer
          </Button>
        </div>
      </form>
    </>
  );
}

export default Song_details;
