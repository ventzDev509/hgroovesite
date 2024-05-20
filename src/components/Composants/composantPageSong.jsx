import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import "./css/composantSong.css";
import { useDataContext } from "../dataProvider/context";
import BtnSongPlayPause from "../bottom/btnContoller/songBtnPlayPause";
import { useDataContextSong } from "../dataProvider/getSong";
import Composant from "./composant";

function Media(props) {
  const { loading = false } = props;
  const { categorieSong } = useDataContextSong();
  const { basename } = useDataContext();
 
  return (
    <Grid
      key={2}
      id="flexItem"
      container
      wrap="wrap"
      style={{ width: "100%", margin: "auto" }}
      i={7}
    >
      {(loading ? Array.from(new Array(3)) : categorieSong).map(
        (item, index) => (
          <div className="contenSong" key={index}>
            <div id="btn">
              <>
                <BtnSongPlayPause
                  allSong={categorieSong}
                  id={item.id_song}
                  index={index}
                />
              </>
            </div>
            <div className="topImg">
              {item ? (
                <>
                  <img alt={item.title} src={item.image} />
                </>
              ) : (
                <Skeleton variant="rectangular" width={144} height={118} />
              )}
            </div>

            {item ? (
              <div className="itemBottom" sx={{ pr: 0 }}>
                <Typography gutterBottom variant="body2" className="title">
                  {basename(item.url)}
                </Typography>

                {/* <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography> */}
              </div>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </div>
        )
      )}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function SongItems({ categorie }) {
  const { categorieSong, category } = useDataContextSong();
  React.useEffect(() => {
    category(categorie);
    console.log(categorieSong.length);
  }, []);
  return (
    <>
      <div id="pc-mode">
        {categorieSong.length > 1 && (
          <Composant
            title={"You maybe Like"}
            display={"none"}
            song={categorieSong}
          />
        )}
      </div>
      <div id="responsive">
        <Box sx={{ overflow: "hidden" }}>
          {categorieSong.length > 1 && (
            <>
              <h3 className="title">people like</h3>
              <Media categorie={categorie} />
            </>
          )}
        </Box>
      </div>
    </>
  );
}
