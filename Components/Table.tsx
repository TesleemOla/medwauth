import React, { useState } from 'react'
import Tablehead from './Tablehead'
import FetchAllItems from '@/app/dashboard/_data'
import { Drugdata, fetchAllData } from '@/types/typedef'
import TableRow from './TableDataRow'

const Table = async ({ token, item }: fetchAllData) => {
    // const [fields, setFields] = useState()

    const data = await FetchAllItems(token, item)
    // setFields(data)
    const headings = Object.keys(data)

  return (
    <table>
        <Tablehead {...headings}
        // heading1="Name" heading3="Category" heading2="Description" heading4="Pack size" heading5="Package Type"
        //   heading6="Treatment For" heading7={undefined} heading8={undefined} heading9={undefined} heading10={undefined}
        />
        {
            data.map(({ categoryId, drugDescription, drugName, noInPackage, packageType, productId, reOrderLevel, scientificName, treatmentUsedFor, _id}: Drugdata)=>{
                return(
                    <TableRow key={_id} data3={categoryId} data2={drugDescription} data1={drugName} data4={noInPackage} data5={packageType}
                    data6={treatmentUsedFor} data7={null} data8={null} data9={null} data10={null} />
                )
            }
            )
        }
    </table>
  )
}

export default Table