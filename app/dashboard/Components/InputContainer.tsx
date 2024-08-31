import React from 'react'
import { Label, Input, Field} from "@headlessui/react"

interface inputProps{
    htmlFor: string,
    label: string,
    name: string,
    placeholder: string,
    required?: boolean,
    type: string
}
const InputContainer = ({ htmlFor, label, name, placeholder, required, type}: inputProps) => {
  return (
    <Field className="flex flex-col">
      <Label htmlFor={htmlFor} className="mb-2 font-bold text-lg text-gray-700">{label}</Label>
        <Input name={name} placeholder={placeholder} id={htmlFor} required={required} type={type}
        className="border py-2 px-3 text-gray-900 data-[hover]:shadow data-[focus]:bg-blue-100"/>
    </Field>
  )
}

export default InputContainer