"use client"
import { useSession} from "next-auth/react";
import { useEffect, useState } from "react"
import FetchAllItems from "../_data";
import { TableRow, Tablehead } from "@/Components";
import { CategoryData } from "@/types/typedef";



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
           <table>
                <Tablehead heading1="Name" heading2="Description"  />
                <tbody>
                    {
                        dataObj?.map(({_id,name, description})=><TableRow data1={name} data2={description} key={_id}/>)
                    }
                </tbody>
           </table>
        </div>
    )
}



export default DrugCategories