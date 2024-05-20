import { useDataContextSong } from "../../../dataProvider/getSong";
import { useDataContext_user } from "../../../dataProvider/user";
import axios from "axios";
function Search() {
  const {  setUserSong ,getAllUserSongAdd} = useDataContextSong();
  const { link } = useDataContext_user();

  const search = async (search) => {
    if (search.trim() == "") {
      getAllUserSongAdd();
    } else {
      await axios
        .get(`${link}search/${search}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
          },
        })
        .then((response) => {
          setUserSong(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="record-header">
        <div className={`add`}>
          <button style={{ marginRight: "10px" }}>add New song</button>

          <div className="browse">
            <input
              type="search"
              placeholder="search by name"
              className="record-search"
              style={{ width: "100%" }}
              onChange={(e) => search(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
