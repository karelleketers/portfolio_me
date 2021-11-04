import React from 'react'
import { useField } from 'formik';

export interface TextFieldProps {
  label: string
  value: string
  name: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const TextField = ({label, ...props }: TextFieldProps) => {
  const [field, meta,] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <>
        <div className="relative my-16">
            <input className="peer relative focus:outline-none leading-tight text-smaller xs:text-sm pb-1 md:pb-2 md:text-base xli:text-xl bg-light bg-opacity-0 w-full placeholder-transparent border border-transparent border-b-dark mt-2 focus:border-b-gold focus:border-b-2 z-20" {...field} {...props}/>
            <label className="absolute left-0 -top-3.5 text-gray-500 text-xs xs:text-smaller md:text-sm xli:text-base peer-placeholder-shown:text-smaller xs:peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base xli:peer-placeholder-shown:text-xl transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-placeholder peer-focus:text-xs xs:peer-focus:text-smaller md:peer-focus:text-sm xli:peer-focus:text-base peer-focus:text-gray-500 peer-focus:-top-3.5 z-10" htmlFor={props.name}>{label}</label>
            <div className="text-xs absolute left-0 top-8 lg:top-12 text-error">
                {errorText}
            </div>
        </div>
    </>
  )
}

