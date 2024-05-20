import { useEffect } from "react";
import Composant from "../../Composants/composant";
import { useDataContextSong } from "../../dataProvider/getSong";
function NewAdd() {
  const { getNewAdd, newAdd } = useDataContextSong();
  useEffect(() => {
    let interval;
    getNewAdd();
    interval = setInterval(() => {
      getNewAdd();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Composant title={"New Add"} display={"none"} song={newAdd} />
    </>
  );
}

export default NewAdd;
