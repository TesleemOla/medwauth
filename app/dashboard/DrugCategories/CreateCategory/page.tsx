"use client"
import { FormWrapper, SubmitBtn } from '@/app/dashboard/Components'
import { hosturl } from '@/utils/host'
import { useSession } from 'next-auth/react'
import React from 'react'


const CreateCategory = () => {

      const {data: session, status} = useSession() 
      const token = session?.user?.token

    function creator(formData: FormData){
      const name = formData.get('name')
      const description = formData.get('description')
      const bodyObj = {
        name,
        description
      }

      fetch(`${hosturl}/api/drugCategory`,{
        method: "POST",
        body: JSON.stringify(bodyObj),

        headers:{
          authorization: `Bearer ${token}`
        }
      })
        .then(res=> {
          if(res.ok){
            alert(`New category created`)
          }
        })
        .catch(err=> alert(err.message))
      
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
              <SubmitBtn disState="Creating...">
                Create
              </SubmitBtn>
          </form>
    
    </FormWrapper>
  )
}

export default CreateCategory