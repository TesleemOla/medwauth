import React from "react"

 interface dataType {
    data1: String,
    data2: String,
    data3: String,
    data4: String,
    data5: String,
    data6: String,
     data7: String | null,
     data8: String | null,
     data9: String | null,
     data10: String | null
}
const TableRow = (props: dataType)=>{
    const data = Object.keys(props)
    return (
        <tr>
          {data.map((item,i)=> <td key={i}>{item[i]}</td>)}        
        </tr>
    )
}

export default TableRow