import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function createData(
  name,
  calories,
  fat,
) {
  return { name, calories, fat};
}

const rows = [
  createData('Sales', 1194.58, 11418.29),
  createData('Advertising', 6879.02, 9271.36),
  createData('Inventory', 4692.26, 9768.09),
  createData('Entertainment', 0.00,0.00),
  createData('Product',4652.10, 2529.90),
];

export default function WatchList() {
  return (
    <TableContainer component={Paper}>
        <Box sx={{
            borderBottom:'1px solid #f6f6f7',
            padding:'15px'
        }}><h3>Account Watchlist</h3></Box>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell align="right">This month</TableCell>
            <TableCell align="right">YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}