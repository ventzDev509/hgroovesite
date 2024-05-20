import { BsFillSkipStartFill } from "react-icons/bs";
import { DataProvider, useDataContext } from "../../dataProvider/context";
import { useDataContextSong } from "../../dataProvider/getSong";
// import Tooltip from '@mui/material/Tooltip';
export default function Back_btn() {
  const { data, index, setIndex, getSongData, onplay } = useDataContext();
  const { getNewAdd } = useDataContextSong();

  const Back = () => {
    setIndex(index + 1);
    onplay();
  };
  return (
    <>
      {/* <Tooltip title="Go back"> */}
      <BsFillSkipStartFill
        className="icons"
        onClick={() => {
          getNewAdd();
          if (index == 0) {
            setIndex(0);
            Back(), getSongData(data, data.length - 1);
          } else {
            Back(), getSongData(data, index - 1);
          }
        }}
      />
      {/* </Tooltip> */}
    </>
  );
}
