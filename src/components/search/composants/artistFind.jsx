import "./css/artistefind.css";
import img from "../../../assets/medias/toby.jpg";
function ArtisteFindSearch({artist}) {
  return (
    <>
      {artist &&
        artist.map((data, index) => (
          <div id="artisteFind" key={index}>
            <h5>Artist Found</h5>

            <div className="item">
              <div className="leftItem">
                <img src={data.profile} alt="" />
              </div>
              <div className="rightItem">
                <h1> {data.username}</h1>
                <small className="small">300 abonnees</small>
                <p className="p">artiste verifier</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
export default ArtisteFindSearch;
