import Composant_Artiste_page from "../Composants/composantArtistepage.jsx";
import Profile from "./profile";
import Suggestion_become_artiste from "./suggestionBecomeArtiste.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User_Profile() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token_hg"); // Getting token from local storage
  useEffect(() => {
    // Redirect to login page if token is not available
    if (token == null) {
      navigation("/Login");
    }
  }, [token, navigation]); // Dependency array to ensure effect runs only when token or navigation changes

  return (
    <>
      <div id="user_profile">
        <div id="flexs">
          {/* Main Content Area */}
          <div className="itemSearch">
            <Profile /> {/* Profile Component */}
            {/* Container for various sections */}
            <div className="song-result">
              {/* Component for Favorite Songs */}
              <Composant_Artiste_page title={"Favorite songs"} />
              {/* Component for Suggested Artists */}
              <Suggestion_become_artiste />
              {/* Component for Recently Listened Songs */}
              <Composant_Artiste_page title={"Last Listen"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_Profile;
