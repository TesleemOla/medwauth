import useSWR from "swr"
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
export const fetcher = (...args) => fetch(...args, {
    method: "GET",
    headers: {
        authorization: `Bearer ${token}`
    }
})
    .then(res => res.json())

export function useData(item: string, fetchfunc: any) {
    const { data, error, isLoading } = useSWR(`${url}/api/${item}`, fetchfunc)

    return {
        dataObj: data?.data,
        isLoading,
        isError: error
    }
}