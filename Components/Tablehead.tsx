import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell  from '@mui/material/TableCell'

export interface headingType{
  heading1: String,
  heading2: String,
  heading3: String,
  heading4: String,
  heading5: String,
  heading6: String, 
  heading7: String | undefined,
  heading8: String | undefined,
  heading9: String | undefined,
  heading10: String | undefined,

}
const Tablehead = ({ heading1, heading2, heading3, heading4, heading5, 
  heading6, heading7, heading8, heading9, heading10
}: headingType) => {

  
  return (
    <TableHead>
      <TableRow>
        <TableCell>{heading1}</TableCell>
        <TableCell>{heading2}</TableCell>
        <TableCell>{heading3}</TableCell>
        <TableCell>{heading4}</TableCell>
        <TableCell>{heading5}</TableCell>
        <TableCell>{heading6}</TableCell>
        <TableCell>{heading7}</TableCell>
        <TableCell>{heading8}</TableCell>
        <TableCell>{heading9}</TableCell>
        <TableCell>{heading10}</TableCell>
      </TableRow>
    </TableHead>
  )
}



export default Tablehead


