import React from "react"

 interface headingType {
    heading1: String,
    heading2: String,
    heading3: String,
    heading4: String,
    heading5: String,
    heading6: String,
     heading7: String | undefined,
     heading8: String | undefined,
     heading9: String | undefined,
     heading10: String | undefined
}
const TableRow = ({
    heading1, heading2, heading3, heading4, heading5,
    heading6, heading7, heading8
}: headingType)=>{
    return (
        <tr>
           <td>{heading1}</td>
           <td>{heading2}</td>
           <td>{heading3}</td>
           <td>{heading4}</td>
           <td>{heading5}</td>
           <td>{heading6}</td>
           <td>{heading7}</td>
           <td>{heading8}</td>          
        </tr>
    )
}

export default TableRow