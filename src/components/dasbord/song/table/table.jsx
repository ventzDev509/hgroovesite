import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDataContextSong } from "../../../dataProvider/getSong";
import { useEffect } from "react";
import LongMenu from "../dialog/menu";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F1B81E",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:"#fff",
    backgroundColor:"#0e0e0e"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



export default function ListOfSongs() {
  const { getAllUserSongAdd, getUserSong } = useDataContextSong();
  useEffect(() => {
    getAllUserSongAdd();
  }, []);
  //format data  0000-00-00 to year-month-day
  function formatDate(date) {
    const getDate = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };

    const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
      getDate
    );
    return formattedDate;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#F1B81E" }}>
            <StyledTableCell>Cover</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Like</StyledTableCell>
            <StyledTableCell align="right">Listen</StyledTableCell>
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">Created</StyledTableCell>
            <StyledTableCell align="right">Solde&nbsp;(HTG)</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUserSong &&
            getUserSong.map((data, index) => (
              <StyledTableRow key={data.index}>
                <StyledTableCell align="right">
                  <div
                    className="client-img bg-img"
                    style={{
                      // background: `url(${data.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      objectFit: "fill",
                    }}
                  >
                    <img
                      src={data.image}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                      srcSet=""
                    />
                  </div>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {data.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data.likeCount}
                </StyledTableCell>
                <StyledTableCell align="right">{200}</StyledTableCell>
                <StyledTableCell align="right">{data.tag}</StyledTableCell>
                <StyledTableCell align="right">
                  {formatDate(data.created)}
                </StyledTableCell>
                <StyledTableCell align="right">{data.solde} HTG</StyledTableCell>
                <StyledTableCell align="right">
                  <Link>
                    <LongMenu code={data.id_song} />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
