import React, { FC, HTMLAttributes } from 'react'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
}
export default Button
