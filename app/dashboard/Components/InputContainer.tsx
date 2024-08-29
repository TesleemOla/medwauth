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
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input name={name} placeholder={placeholder} id={htmlFor} required={required} type={type}
              className="border data-[hover]:shadow data-[focus]:bg-blue-100"/>
    </Field>
  )
}

export default InputContainer