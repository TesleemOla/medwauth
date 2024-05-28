
import { hosturl as url } from "@/utils/host"


export default async function FetchAllItems (token: string, item: string) {

    const data = await fetch(`${url}/api/${item}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const response = await data.json()
    
    return response.data
}