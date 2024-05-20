import { useEffect } from "react";
import Composant from "../../Composants/composant";
import { useDataContextSong } from "../../dataProvider/getSong";
function MostLiked() {
  const { mostLike, mostLiked } = useDataContextSong();
  useEffect(() => {
    let interval;
    mostLike();
    interval = setInterval(() => {
      mostLike();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Composant title={"Most Liked"} display={"none"} song={mostLiked} height={"155px"} />
    </>
  );
}

export default MostLiked;
