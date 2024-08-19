import React from 'react'
import Image from 'next/image'

const SummaryCard = ({ Headdet, data, icon}) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
       
        <div className="card-body">
          {/* <Image src={icon} alt={Headdet} width={200} height={100}/> */}
            <h2 className="card-title">{Headdet}</h2>
            <p>{data}</p>
          
        </div>
    </div>
  )
}

export default SummaryCard