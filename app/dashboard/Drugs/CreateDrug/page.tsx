"use client"
import { FormWrapper, InputContainer, Loading, SubmitBtn } from '@/app/dashboard/Components'
import { useData } from '@/utils/data'
import { hosturl } from '@/utils/host'
import { ListboxOption, Select } from '@headlessui/react'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { useActionState } from "react"
import React from 'react'

const CreateDrug = () => {
   
    const { data: session, status} = useSession()

    const token = session?.user?.token;
     const fetcher=(str: string)=> fetch( str,{
            method: "GET",
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        .then(res=> res.json())
    

    const { dataObj: categories, isError, isLoading} = useData(`drugCategory`, fetcher, session)
    function submitDrug(formData: FormData){
        const drugName = formData.get("drugName")
        const drugDescription = formData.get("drugDescription")
        const productId = formData.get("productId") 
        const packageType = formData.get("packageType")
        const noInPackage = formData.get("noInPackage")
        const reOrderLevel = formData.get("reOrderLevel")
        const categoryId = formData.get("categoryId")
        const treatmentFor = formData.get("treatmentFor")
        const obj ={ drugName, drugDescription, productId, packageType, noInPackage, reOrderLevel, categoryId, treatmentFor}

        fetch(`${hosturl}/api/drug`,{
            method: "POST",
            body: JSON.stringify(obj),
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            if(res.ok){
                alert(`New Item created`)
            }
        })
        .catch(err=>   alert(err.message))
    }
    
    if(isLoading) {
        return <Loading /> }
  return (
    <FormWrapper>
        <p>Create New Drug</p>
        <form className="m-2 text-center">
            <div className="grid grid-cols-2 gap-5 my-4 text-left">
            <InputContainer htmlFor="DrugName" label="Name" name="drugName" placeholder="Name" required={true} type="text" />
            <InputContainer htmlFor="Description" label="Description" name="drugDescription" placeholder="Description" required={true} type="text" />
            <InputContainer htmlFor="ProductId" label="ProductId" name="productId" placeholder="ProductId" required={true} type="text" />
            <InputContainer htmlFor="PackageSize" label="PackageSize" name="noInPackage" placeholder="PackageSize" required={true} type="text" />
            <InputContainer htmlFor="treatmentFor" label="treatmentFor" name="treatmentFor" placeholder="for" type="text" />
            <InputContainer htmlFor="reOrderLevel" label="reorderLevel" name="reOrderLevel" placeholder="reorder" type="number" />

            
              <div className='flex flex-col'>
                  <label>PackageType</label>
                      <Select name="packageType" className="border py-2 px-3 text-gray-900 data-[hover]:shadow data-[focus]:bg-blue-100">
                      {
                          ["syringe", "vial", "plastic", "blister pack", "ampoule", "aluminium foil", "bottle"]
                          .map((item) => {
                              return <option value={item} key={item}>{item}</option>
                          })
                      }

                  </Select>
                </div>
                <div className='flex flex-col'>
                    <label>Select Category</label>
                      <Select name="categoryId" className="border py-2 px-3 text-gray-900 data-[hover]:shadow data-[focus]:bg-blue-100">
                        {
                            categories?.map(({_id,name}:{_id:string,name:string})=>{
                                return <option value={_id} key={name}>{name}</option>
                            })
                        }
                        
                    </Select>
                </div>
            </div>
            <SubmitBtn disState="Creating">
                Create Drug
            </SubmitBtn>
        </form>
    </FormWrapper>
  )
}

export default CreateDrug