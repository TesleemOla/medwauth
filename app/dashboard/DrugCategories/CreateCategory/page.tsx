"use client"
import { FormWrapper } from '@/app/dashboard/Components'
import { hosturl } from '@/utils/host'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useFormStatus } from 'react-dom'

const CreateCategory = () => {
    const { pending } = useFormStatus()
      const {data: session, status} = useSession() 
      const token = session?.user?.token

    function creator(formData: any){
      const name = formData.get('name')
      const description = formData.get('description')
      const bodyObj = {
        name,
        description
      }
      console.log(name, description)
      fetch(`${hosturl}/api/drugCategory`,{
        method: "POST",
        body: JSON.stringify(bodyObj),

        headers:{
          authorization: `Bearer ${token}`
        }
      })
        .then(res=> res)
      
    } 

  return (
    <FormWrapper>
          <form action={creator}
        className="flex flex-col align-middle justify-center">
            <div>
                <label htmlFor="category">Category Name</label>
                <input type="text" name="name" id="category" placeholder="Category Name"/>
            </div>        
              <div>
                  <label htmlFor="description">Description</label>
                  <input type="text" name="description" id="description" placeholder="Description" />
              </div>
              <button aria-disabled={pending} type="submit" className="bg-blue-900 text-white p-2">
                { pending? "Creating...": "Create" }
              </button>
          </form>
    
    </FormWrapper>
  )
}

export default CreateCategory