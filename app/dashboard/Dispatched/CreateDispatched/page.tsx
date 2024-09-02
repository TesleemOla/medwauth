"use client"
import { FormWrapper, InputContainer, SubmitBtn } from '@/app/dashboard/Components'
import { useData } from '@/utils/data'
import { hosturl } from '@/utils/host'
import { Select } from '@headlessui/react'
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
    
    
    const { dataObj: inventoryData, isLoading: inventoryLoading, isError: inventoryError} = useData(`inventories`, fetcher, session)
       

        function createAction(formData:FormData){
            const inventory = formData.get("inventory")
            const quantity = formData.get("quantity")

            const obj ={ inventory, quantity, client: session?.user._id}
            fetch(`${hosturl}/api/dispatched/create`,{
                method: "POST",
                body: JSON.stringify(obj),
                headers:{
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                }
            })
            .then(res=>{
                if(res.ok){
                    alert("New Item Dispatched")
                }
            })
            .catch(err=> alert(err.message))
        }

  return (
    <FormWrapper>
        <form action={createAction} className="text-center px-2">
            <div className="grid grid-cols-2 text-left gap-3 mb-3">
              <div className='flex flex-col'>
                      <label className="mb-2 font-bold text-lg text-gray-700">PackageType</label>
                  <Select name="inventory" className="border py-2 px-3 text-gray-900 data-[hover]:shadow data-[focus]:bg-blue-100">
                      {
                          inventoryData?.map(({_id, drugName}:{_id:string, drugName:string}) => {
                                  return <option value={_id} key={_id}>{drugName}</option>
                              })
                      }

                  </Select>
              </div>
            <InputContainer htmlFor="quantity" label="Quantity" name="quantity" required={true} type="number" placeholder='Quantity'/>
            </div>
            <SubmitBtn disState="...Creating">
                Create
            </SubmitBtn>
        </form>
    </FormWrapper>
  )
}

export default CreateDispatched