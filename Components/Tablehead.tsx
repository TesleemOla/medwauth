import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses }  from '@mui/material/TableCell'
import { styled } from "@mui/material/styles"

export interface headingType{
  heading1: String,
  heading2: String,
  heading3: String,
  heading4: String,
  heading5?: String,
  heading6?: String, 
  heading7?: String | undefined,
  heading8?: String | undefined,
  heading9?: String | undefined,
  heading10?: String | undefined,

}
const Tablehead = ({ heading1, heading2, heading3, heading4, heading5, 
  heading6, heading7, heading8, heading9, heading10
}: headingType) => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <TableHead >
      <TableRow >
        <StyledTableCell>{heading1}</StyledTableCell>
        <StyledTableCell>{heading2}</StyledTableCell>
        <StyledTableCell>{heading3}</StyledTableCell>
        <StyledTableCell>{heading4}</StyledTableCell>
        <StyledTableCell>{heading5}</StyledTableCell>
        <StyledTableCell>{heading6}</StyledTableCell>
        <StyledTableCell>{heading7}</StyledTableCell>
        <StyledTableCell>{heading8}</StyledTableCell>
        <StyledTableCell>{heading9}</StyledTableCell>
        <StyledTableCell>{heading10}</StyledTableCell>
      </TableRow>
    </TableHead>
  )
}



export default Tablehead

  // < TableContainer component = { Paper } >
  //   <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
  //     <TableHead>
  //       <TableRow>
  //         <TableCell>Dessert (100g serving)</TableCell>
  //         <TableCell align="right">Calories</TableCell>
  //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
  //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
  //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {rows.map((row) => (
  //         <TableRow
  //           key={row.name}
  //           sx={{ '&:last-child td, &:last-child TableCell': { border: 0 } }}
  //         >
  //           <TableCell component="TableCell" scope="row">
  //             {row.name}
  //           </TableCell>
  //           <TableCell align="right">{row.calories}</TableCell>
  //           <TableCell align="right">{row.fat}</TableCell>
  //           <TableCell align="right">{row.carbs}</TableCell>
  //           <TableCell align="right">{row.protein}</TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  //   </TableContainer >
