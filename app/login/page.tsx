"use client"
import React from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import SubmitBtn from '@/app/dashboard/Components/submitbtn'
import { redirect } from 'next/navigation'



const Login = () => {
   
     async function handleLogin(formData: FormData) {
        setTimeout(()=> console.log("checked"), 5000)
        const username = formData.get("username")
        const password = formData.get("password")
        // getCsrfToken()
        signIn("credentials",{
            redirect: false,
            username:username,
            password: password,
        })

        .then(resp=>  {
          alert(resp)
          redirect("/dashboard")
        })
        .catch(err=> alert(err))
        
    }

  return (
    <div className=" flex-center min-h-screen mx-auto w-4/5 md:w-2/5
    h-3/4 md:h:2/5">
      
        <p className="text-xl text-blue-700">Login </p>
          <form className="flex flex-col border-black border-solid border-2 rounded-lg p-4" 
               action={handleLogin} 
             >
            <div className="flex flex-col gap-3">
                <label htmlFor="Email">Email</label>
                <input type="email" name="username" id="Email" className='border-black border-2 border-solid p-2' required/>
            </div>
            <div className="flex flex-col gap-3 my-3">
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" id="Password" className='border-black border-2 border-solid p-2' required/>
            </div>
          
              <SubmitBtn disState="Logging In ....">
                LogIn
              </SubmitBtn>
        </form>
        <p> Dont have an account?</p>
        <Link href="/register">Register</Link>
    </div>
  )
}

export default Login

