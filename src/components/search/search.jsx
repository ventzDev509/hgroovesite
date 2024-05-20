import "../navigations/css/menu.css";
import "./css/style.css";
import ArtisteFindSearch from "./composants/artistFind";
import Composant_Artiste_page from "../Composants/composantArtistepage.jsx";
import Composant from "../Composants/composant.jsx";
import ComposantArtiste from "../Composants/composantArtiste.jsx";
import { useDataContextSong } from "../dataProvider/getSong.jsx";
import { useEffect } from "react";
function Search() {
  const { search, searchResultSong, searchResultArtist } = useDataContextSong();
  const getSearch = (e) => {
    search(e.target.value);
    localStorage.setItem("lastSearch", e.target.value);
  };
  useEffect(() => {
    search(localStorage.getItem("lastSearch"));
  }, []);
  return (
    <>
      <div id="search">
        <div id="home-s">
          <div id="flex">
            <div className="itemSearch">
              <div className="searchInput">
                <div></div>
                <div className="group">
                  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input
                    placeholder="Search"
                    type="search"
                    className="input"
                    onChange={getSearch}
                  />
                </div>
              </div>
              <ArtisteFindSearch artist={searchResultArtist} />
              <div className="song-result">
                <Composant_Artiste_page
                  title={"Song Found"}
                  songData={searchResultSong}
                />
                <Composant title={"You May Liked"} />
                <ComposantArtiste title={"people Liked"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
