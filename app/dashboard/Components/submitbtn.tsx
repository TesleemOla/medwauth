"use client"
import React from 'react'
import { Button } from "@mui/material"
import { useFormStatus} from "react-dom"

interface btnType{
    children: React.ReactNode,
    disState: string
}
const SubmitBtn = ({ children, disState}: btnType) => {

    const { pending } = useFormStatus()
  return (
    <Button type="submit" className="btn btn-primary bg-blue-800 text-white hover:bg-blue-400 my-4"
    aria-disabled={pending}>
        { pending? disState: children}
    </Button>
  )
}

export default SubmitBtn