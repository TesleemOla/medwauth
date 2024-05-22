import React from "react"

 interface dataType {
    data1: String,
    data2: String,
    data3: String,
    data4: String,
    data5: String,
    data6: String,
     data7: String | undefined,
     data8: String | undefined,
     data9: String | undefined,
     data10: String | undefined
}
const TableRow = ({
    data1, data2, data3, data4, data5,
    data6, data7, data8
}: dataType)=>{
    return (
        <tr>
           <td>{data1}</td>
           <td>{data2}</td>
           <td>{data3}</td>
           <td>{data4}</td>
           <td>{data5}</td>
           <td>{data6}</td>
           <td>{data7}</td>
           <td>{data8}</td>          
        </tr>
    )
}

export default TableRow