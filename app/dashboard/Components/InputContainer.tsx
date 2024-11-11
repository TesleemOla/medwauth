import React from 'react'
import { Label, Input, Field} from "@headlessui/react"

interface inputProps{
    htmlFor: string,
    label: string,
    name: string,
    placeholder: string,
    required?: boolean,
    type: string,
    disabled?: boolean
}
const InputContainer = ({ htmlFor, label, name, placeholder, required, type, disabled}: inputProps) => {
  return (
    <Field className="flex flex-col w-screen md:w-full">
      <Label htmlFor={htmlFor} className="mb-2 font-bold text-lg text-gray-700">{label}</Label>
        <Input name={name} placeholder={placeholder} id={htmlFor} required={required} type={type} disabled={disabled}
        className="border border-black rounded-lg py-2 px-3 text-gray-900 data-[hover]:shadow data-[focus]:bg-blue-100"/>
    </Field>
  )
}

export default InputContainer