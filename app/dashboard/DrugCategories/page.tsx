"use client"
import { useSession} from "next-auth/react";
import { useEffect, useState } from "react"
import FetchAllItems from "../_data";
import { TableDataRow, Tablehead } from "@/Components";
import { CategoryData } from "@/types/typedef";
import { TableBody, TableContainer } from "@mui/material";



const DrugCategories=()=>{

    const {data:session, status} = useSession()
    const [ dataObj, setDataObj] = useState<CategoryData[]>()
   
    useEffect(()=>{
        async function getData(){
            if(session){
                return await FetchAllItems(session?.user.token, "drugCategory")
            }
        }
        getData()
        .then(res=> setDataObj(res))
        

    }, [session, dataObj])
   
    return(
        <div>
           <TableContainer>
                <Tablehead heading1="Name" heading2="Description"  />
                <TableBody>
                    {
                        dataObj?.map(({_id,name, description})=><TableDataRow data1={name} data2={description} key={_id}/>)
                    }
                </TableBody>
           </TableContainer>
        </div>
    )
}



export default DrugCategories