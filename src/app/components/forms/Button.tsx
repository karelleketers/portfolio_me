import React from 'react'

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined
  children: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({ type, children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="shadow-lg font-josefine text-center text-base sm:text-xl w-12/25 xs:w-2/5 max-w-button rounded-full text-light bg-gold hover:bg-dark duration-200 py-4"
    >
      {children}
    </button>
  )
}
