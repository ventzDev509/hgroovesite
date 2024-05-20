import { useDataContext } from "../dataProvider/context";
function Maquee() {
  const { basename,playingSong } = useDataContext();
  return (
    <>
      <marquee behavior="" direction="" scrollamount={2}>
        <small style={{ fontSize: "12px" }}>{basename(playingSong)}</small>
      </marquee>
    </>
  );
}
export default Maquee;
