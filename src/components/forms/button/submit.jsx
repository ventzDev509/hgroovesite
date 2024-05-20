import { Button } from "@mui/material";
import Loader from "../../loader/loader";

function SubmitBtn({isRegistering,txt}) {
  return (
    <>
      <Button variant="contained" className="btnSave" type="submit">
        {/* Show loader when registering */}
        {!isRegistering ? `${txt}` : <Loader />}
      </Button>
    </>
  );
}
export default SubmitBtn;
