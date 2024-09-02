"use client"
import { useSession} from "next-auth/react";
import { TableDataRow, Tablehead, TableNav } from "@/app/dashboard/Components";
import { CategoryData } from "@/types/typedef";
import { TableBody, TableContainer, Table } from "@mui/material";
import { useData } from "@/utils/data";



const DrugCategories=()=>{

    const {data:session, status} = useSession()

    const fetcher=(str: string)=> fetch(str,{
        method: "GET",
        headers:{
            authorization: `Bearer ${session?.user?.token}`
        }
    })
    .then(res=> res.json())

    const { dataObj: categoryData, isLoading, isError} = useData(`drugCategory`,fetcher, session)
    
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
            <Table>
                <Tablehead heading1="Name" heading2="Description" />
                <TableBody>
                    {
                        categoryData?.map(({ _id, name, description }: CategoryData) => <TableDataRow key={_id} data1={name} data2={description} data3={null} data4={null} />)
                    }
                </TableBody>
            </Table>
           </TableContainer>
        </div>
    )
}



export default DrugCategories