"use client"
import { FormWrapper, InputContainer } from '@/Components'
import { useData } from '@/utils/data'
import { useSession } from 'next-auth/react'
import React from 'react'

const CreateDispatched = () => {
    const { data: session, status} = useSession()
    const token =session?.user?.token

    const fetcher = (str: string)=> fetch(str,{
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res=> res.json())
    
    
    const { dataObj: inventoryData, isLoading: inventoryLoading, isError: inventoryError} = useData(`inventories`, fetcher)

  return (
    <FormWrapper>
        <form>
            <InputContainer htmlFor="qauntity" label="Quantity" name="quantity" required={true} type="number" placeholder='Quantity'/>
        </form>
    </FormWrapper>
  )
}

export default CreateDispatched