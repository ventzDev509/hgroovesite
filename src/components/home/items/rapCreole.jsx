import { useEffect } from "react";
import Composant from "../../Composants/composant";
import { useDataContextSong } from "../../dataProvider/getSong";
function RapCreole() {
  const { getRapCreole, rapCreole } = useDataContextSong();
  useEffect(() => {
    let interval;
    getRapCreole();
    interval = setInterval(() => {
      getRapCreole();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Composant title={"Rap-Creole"} display={""} song={rapCreole} height={"155px"}/>
    </>
  );
}

export default RapCreole;
