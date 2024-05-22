import { hosturl as url } from "./host"
import { fetchAllData } from "@/types/typedef"

export const FetchAllItems = async (token: string, item:string) =>{
    const data = await fetch(`${url}/api/${item}`,{
        method: "GET",
        headers: {
            Authorization: token
        }
    })
    const response = await data.json()
    return response
}

// const FetchSingleCustomer = async()