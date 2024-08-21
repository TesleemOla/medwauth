"use client"
import React, { useState } from 'react'
import { InputContainer } from '@/Components'
import {Button} from "@headlessui/react"
import { useFormStatus } from 'react-dom'
import { hosturl } from '@/utils/host'


const Register = () => {
  const [message, setMessage] = useState<string>("")
  const { pending } = useFormStatus()


  async function registerHandler(formData: any){
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const password = formData.get("password")

    const details = {
      firstName, lastName, email, password, access: "client"
    }
    console.log(pending)
    const response = await fetch(`${hosturl}/register`,{
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        'Content-Type': "application/json"
      }
    })
    const res = response.json()
    const real = await res
    console.log(real)
    if(real.success === false){
      alert(`Error: ${real.error}`)
    }else if(real.success === true){
      alert(`Success: New User Account Created`)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center border-solid border-black border-1px shadow-zinc-600 ">
     
      <form className="gap-3 w-1/3" action={registerHandler}>
        <div className="flex flex-row flex-wrap gap-4">
          <InputContainer htmlFor="firstName" name="firstName" placeholder="Jonh" required={true} label="First Name" type="text" />
          <InputContainer htmlFor="lastName" name="lastName" placeholder="Deo" required={true} label="Last Name"  type="text" />
        </div>
        <InputContainer htmlFor="email" name="email" placeholder="Email" required={true} label="Email"  type="email" />
        <InputContainer htmlFor="password" name="password" placeholder="Password" required={true} label="Password" type="password" />
        <Button type="submit" aria-disabled={pending}
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        >{ pending? "Please wait ...":"Register"}</Button>
      </form>
    </div>
  )
}

export default Register