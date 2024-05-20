import { Button } from "@mui/material";
import { useDataContext_user } from "../dataProvider/user";
import { useNavigate } from "react-router-dom";
function Log_out() {
   

  const { logOut } = useDataContext_user();
  const navigation = useNavigate();

  const onLog_out = () => {
    logOut();
    navigation("/");
  };

  return (
    <>
      <Button onClick={onLog_out}>log-out</Button>
    </>
  );
}
export default Log_out;
