import { useEffect } from "react";
import ComposantArtiste from "../Composants/composantArtiste";
import { useDataContext_user } from "../dataProvider/user";
function Artist() {
  const { dataArtist ,getArtist} = useDataContext_user();
  useEffect(()=>{
    getArtist()
  },[])
  return (
    <>
      {dataArtist && (
        <>
          <ComposantArtiste data={dataArtist} title={"Artist"} />
        </>
      )}
    </>
  );
}

export default Artist;
