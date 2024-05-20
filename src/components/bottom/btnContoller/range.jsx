import { useDataContext } from "../../dataProvider/context";
export default function Range() {
  const { duration, countTime, setCountTime ,audioElement} = useDataContext();
  const handleSeek = (newValue) => {
    audioElement.current.currentTime = newValue;
    setCountTime(newValue);
  };
  return (
    <>
      <input
        type="range"
        min={0}
        max={isNaN(duration) ? "0" : duration}
        value={countTime}
        onChange={(e) => handleSeek(e.target.value)}
      />
    </>
  );
}
