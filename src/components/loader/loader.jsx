import "./css/loader.css"
function Loader({color}){
    return <>
    <div className="loader" style={{borderRightColor:`${color}`}}></div>
    </>
}
export default Loader;