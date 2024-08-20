"use client"
import { useSession} from "next-auth/react";

import { TableDataRow, Tablehead, TableNav } from "@/Components";
import { CategoryData } from "@/types/typedef";
import { TableBody, TableContainer } from "@mui/material";
import { useData } from "@/utils/data";



const DrugCategories=()=>{

    const {data:session, status} = useSession()
    const fetcher=(...args)=> fetch(...args,{
        method: "GET",
        headers:{
            authorization: `Bearer ${session?.user?.token}`
        }
    })
    .then(res=> res.json())

    const { dataObj: categoryData, isLoading, isError} = useData(`drugCategory`,fetcher)
    
    const loadedData=[]
   if(!isLoading && !isError) {
    for(const key in categoryData){
        loadedData.push(categoryData[key])
    }
   }

    return(
        <div>
            <TableNav item="Categories" createLink="DrugCategories/CreateCategory" />
           <TableContainer>
                <Tablehead heading1="Name" heading2="Description" />
                <TableBody>
                    {
                        categoryData?.map(({_id,name, description}: CategoryData)=><TableDataRow data1={name} data2={description} key={_id}/>)
                    }
                </TableBody>
           </TableContainer>
        </div>
    )
}



export default DrugCategories