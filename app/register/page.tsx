
import React from 'react'
import { InputContainer } from '@/app/dashboard/Components'


import { hosturl } from '@/utils/host'
import SubmitBtn from '@/app/dashboard/Components/submitbtn'


const Register = () => {


  async function registerHandler(formData: FormData){
    "use server"
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const password = formData.get("password")

    const details = {
      firstName, lastName, email, password, access: "client"
    }

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
    <div className="flex flex-col items-center justify-center min-h-screen border-solid border-black border-1px shadow-zinc-600 ">
     
      <form className="gap-3 w-1/3" action={registerHandler}>
        <div className="flex flex-row flex-wrap gap-4">
          <InputContainer htmlFor="firstName" name="firstName" placeholder="Jonh" required={true} label="First Name" type="text" />
          <InputContainer htmlFor="lastName" name="lastName" placeholder="Deo" required={true} label="Last Name"  type="text" />
        </div>
        <InputContainer htmlFor="email" name="email" placeholder="Email" required={true} label="Email"  type="email" />
        <InputContainer htmlFor="password" name="password" placeholder="Password" required={true} label="Password" type="password" />
        <SubmitBtn disState='Please wait ...'>Register</SubmitBtn>
      </form>
    </div>
  )
}

export default Register