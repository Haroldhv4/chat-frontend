import { type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyle = 'rounded focus:outline-none';
  const variantStyle = variant === 'ghost' 
    ? 'hover:bg-gray-800 text-gray-400' 
    : 'bg-blue-600 hover:bg-blue-700 text-white';
  const sizeStyle = size === 'icon' ? 'p-2' : 'px-4 py-2';

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};