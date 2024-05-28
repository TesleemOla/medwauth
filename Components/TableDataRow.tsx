import React from "react"

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
const TableRow = (props: dataType)=>{
    const data = Object.values(props)
    return (
        <tr>
          {data.map((item,i)=> <td key={i}>{item}</td>)}        
        </tr>
    )
}

export default TableRow