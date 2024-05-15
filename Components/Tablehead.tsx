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
                <th>{props.heading1}</th>
                <th>{props.heading2}</th>
                <th>{props.heading3}</th>
                <th>{props.heading4}</th>
                <th>{props.heading5}</th>
                <th>{props.heading6}</th>
                <th>{props.heading7}</th>
                <th>{props.heading8}</th>
            </tr>
    </thead>
  )
}



export default Tablehead

