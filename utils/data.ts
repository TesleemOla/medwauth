import useSWR from "swr"
import { hosturl as url } from "./host"


export const FetchAllItems = async (token: string, url:string) =>{
    const data = await fetch(url,{
        method: "GET",
        headers: {
            Authorization: token
        }
    })
    const response = await data.json()
    return response
}

// const FetchSingleCustomer = async()
export const fetcher = (str: string, token: string) => fetch(str, {
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