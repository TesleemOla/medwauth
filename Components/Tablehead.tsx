import React from 'react'

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
  heading10: String | undefined
}
const Tablehead = (props: headingType) => {
  return (
    <thead>
            <tr>
                <th scope="col">{props.heading1}</th>
                <th scope="col">{props.heading2}</th>
                <th scope="col">{props.heading3}</th>
                <th scope="col">{props.heading4}</th>
                <th scope="col">{props.heading5}</th>
                <th scope="col">{props.heading6}</th>
                <th scope="col">{props.heading7}</th>
                <th scope="col">{props.heading8}</th>
            </tr>
    </thead>
  )
}



export default Tablehead

