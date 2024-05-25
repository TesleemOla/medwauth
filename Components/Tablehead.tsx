import React from 'react'

// export interface headingType{
//   heading1: String,
//   heading2: String,
//   heading3: String,
//   heading4: String,
//   heading5: String,
//   heading6: String, 
//   heading7: String | undefined,
//   heading8: String | undefined,
//   heading9: String | undefined,
//   heading10: String | undefined
// }
const Tablehead = (props:any) => {
  const data = Object.keys(props)
  return (
    <thead>
            <tr>
                {data.map((item,i)=><th scope="col" key={i}>{item}</th>)}
            </tr>
    </thead>
  )
}



export default Tablehead

