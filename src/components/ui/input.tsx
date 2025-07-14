import * as React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = "", type = "text", ...props }, ref) => {
  const classes = `flex h-10 w-full rounded-md border-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`

  return <input type={type} className={classes} ref={ref} {...props} />
})

Input.displayName = "Input"

export { Input }
