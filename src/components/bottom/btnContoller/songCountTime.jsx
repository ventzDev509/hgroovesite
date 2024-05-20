import { useDataContext } from "../../dataProvider/context";
function SongCountTime() {
  const { formatTime, countTime } = useDataContext();
  return (
    <>
      <p>{formatTime(countTime)}</p>
    </>
  );
}
export default SongCountTime;
