import {useDataContext } from "../../dataProvider/context";
function SongTime(){
    const {duration,formatTime}=useDataContext()
    return <>
     <p>{formatTime(duration)}</p>
    </>
}
export default SongTime;