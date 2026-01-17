import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'earth' | 'whatsapp';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-jungle text-white hover:bg-jungle-dark focus:ring-jungle",
    secondary: "bg-gold text-textdark hover:bg-gold-dark focus:ring-gold",
    outline: "border-2 border-jungle text-jungle hover:bg-jungle-light focus:ring-jungle bg-transparent",
    earth: "bg-earth text-white hover:bg-earth-dark focus:ring-earth",
    whatsapp: "bg-success text-white hover:bg-green-600 focus:ring-success",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;