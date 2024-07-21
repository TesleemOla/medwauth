import React from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

 interface dataType {
    data1: String | number,
    data2: String | number,
    data3: String | number,
    data4: String | number,
    data5: String | number,
    data6: String | number,
     data7: String | null,
     data8: String | null,
     data9: String | null,
     data10: number | null
}
const TableDataRow = (props: dataType)=>{
    const data = Object.values(props)
    return (
        <TableRow>
          {data.map((item,i)=> <TableCell key={i}>{item}</TableCell>)}        
        </TableRow>
    )
}

export default TableDataRow

