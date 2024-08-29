"use client"
import { FormWrapper, InputContainer } from '@/app/dashboard/Components'
import { hosturl } from '@/utils/host'
import { useSession } from 'next-auth/react'
import { useActionState } from "react"
import React from 'react'

const CreateDrug = () => {
    const { data: session, status} = useSession()

    const token = session?.user?.token
     const fetchCategories=(str: string)=> fetch( str,{
            method: "GET",
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        .then(res=> res.json())
    }

    
    function createAction(){
        // {
        //     "categoryId": "656dde74cdf04a8bdd8cee50",
        //         
        //           
        //                 "scientificName": "nil",
        //                     "reOrderLevel": 2,
        //                        
        //                             "treatmentUsedFor": "headaches and pain",
        //                                 
        // }
    }
  return (
    <FormWrapper>
        <p>Create New Drug</p>
        <form>
            <InputContainer htmlFor="DrugName" label="Name" name="drugName" placeholder="Name" required={true} type="text" />
            <InputContainer htmlFor="Description" label="Description" name="drugDescription" placeholder="Description" required={true} type="text" />
            <InputContainer htmlFor="ProductId" label="ProductId" name="productId" placeholder="ProductId" required={true} type="text" />
            <InputContainer htmlFor="PackageType" label="PackageType" name="packageType" placeholder="PackageType" required={true} type="text" />
            <InputContainer htmlFor="PackageSize" label="PackageSize" name="noInPackage" placeholder="PackageSize" required={true} type="text" />

            <div className='flex flex-wrap'>

            </div>

        </form>
    </FormWrapper>
  )
}

export default CreateDrug