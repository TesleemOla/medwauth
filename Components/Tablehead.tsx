import React from 'react'

export interface headingType{
  heading1: String,
  heading2: String,
  heading3: String,
  heading4: String,
  heading5: String,
  heading6: String, 
  heading7: String,
  heading8: String,
  heading9: String,
  heading10: String
}
const Tablehead = ({ heading1, heading2, heading3, heading4, heading5,
  heading6, heading7, heading8
}: headingType) => {
  return (
    <thead>
            <tr>
                <th>{heading1}</th>
                <th>{heading2}</th>
                <th>{heading3}</th>
                <th>{heading4}</th>
                <th>{heading5}</th>
                <th>{heading6}</th>
                <th>{heading7}</th>
                <th>{heading8}</th>
            </tr>
    </thead>
  )
}

export default Tablehead