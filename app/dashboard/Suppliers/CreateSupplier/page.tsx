"use client"

import { useSession } from "next-auth/react"
import { FormWrapper, InputContainer, SubmitBtn } from "../../Components"
import { hosturl } from "@/utils/host"

const CreateSupplier = () => {
    const {data:session, status} = useSession()
    const token = session?.user?.token

    function create(formData: FormData){
        const name = formData.get("name")
        const address = formData.get("address")
        const phoneNumber = formData.get("phoneNumber")

        const obj = { name, address, phoneNumber, userId: session?.user?._id}
        fetch(`${hosturl}/api/supplier/new`,{
            method: "POST",
            body: JSON.stringify(obj),
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            if(res.ok){
                alert(`New Supplier created`)
            }
        })
        .catch(err=> alert(err.message))
    }
    
  return (
    <FormWrapper>
        <p>Create New Supplier</p>
        <form action={create} className="text-center px-3">
            <div className="grid grid-cols-2 mb-3 gap-2">
                <InputContainer name="name" htmlFor="name" label="Supplier Name" placeholder="Supplier" type="text" required/>
                <InputContainer name="address" htmlFor="address" label="Address" type="text" placeholder="Address" required/>
                <InputContainer htmlFor="phoneNumber" label="Phone Number" name="phone number" placeholder="Phone" type="text" />
            </div>
        <SubmitBtn disState="Creating ...">
            Create
        </SubmitBtn>
        </form>    
    </FormWrapper>
  )
}

export default CreateSupplier