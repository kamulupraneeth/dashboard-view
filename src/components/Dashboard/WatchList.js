import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export default function WatchList({ data }) {
  const [watchList, setWatchList] = React.useState(data);

  React.useEffect(() => {
    setWatchList(data);
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          borderBottom: "1px solid #f6f6f7",
          padding: "15px",
        }}
      >
        <h3>Account Watchlist</h3>
      </Box>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#B8B8B8" }}>Account</TableCell>
            <TableCell align="right" style={{ color: "#B8B8B8" }}>
              This month
            </TableCell>
            <TableCell align="right" style={{ color: "#B8B8B8" }}>
              YTD
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watchList.map((item, index) => {
            const category = Object.keys(item)[0];
            const values = item[category];
            return (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "bold" }}
                >
                  {category}
                </TableCell>
                {Object.keys(values).map((key, i) => (
                  <TableCell
                    align="right"
                    key={i}
                    style={{ fontWeight: "bold" }}
                  >
                    {parseFloat(values[key])}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
