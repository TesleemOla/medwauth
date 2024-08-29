"use client"
import React, { useState} from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import { BsThreeDotsVertical } from "react-icons/bs";
import PopUp from "./PopUp";

 interface dataType {
    data1: String | number,
    data2: String | number,
    data3: String | number,
    data4: String | number,
    data5?: String | number | null,
    data6?: String | number | null,
     data7?: String | null,
     data8?: String | null,
     data9?: String | null,
     data10?: number | null
}



const TableDataRow = (props: dataType)=>{
  const [isOpen, setIsOpen] = useState<boolean>()
  const handleMouse = () => {
    setIsOpen(!isOpen)
  }

    const data = Object.values(props)
    return (
        <TableRow onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}>
          {data.map((item,i)=> <TableCell key={i}>{item}</TableCell>)}  
          <TableCell> <BsThreeDotsVertical /></TableCell>
          {isOpen && <PopUp />}
        </TableRow>
    )
}

export default TableDataRow

