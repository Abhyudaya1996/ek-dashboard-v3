// Button Component - EarnKaro Brand Colors & Mobile-First Design
'use client';

import React, { forwardRef } from 'react';
import { ButtonProps } from '@/types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, disabled = false, children, className = '', type = 'button', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform-gpu min-h-[44px] min-w-[44px] touch-manipulation';
    
    const variantStyles = {
      primary: 'bg-[#2E7D32] hover:bg-[#1B5E20] text-white shadow-sm hover:shadow-md focus:ring-[#2E7D32]/20',
      secondary: 'bg-[#1976D2] hover:bg-[#1565C0] text-white shadow-sm hover:shadow-md focus:ring-[#1976D2]/20',
      outline: 'bg-transparent border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white focus:ring-[#2E7D32]/20',
      ghost: 'bg-transparent text-[#2E7D32] hover:bg-[#E8F5E8] focus:ring-[#2E7D32]/20'
    };
    
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-[40px]',
      md: 'px-4 py-2.5 text-base min-h-[44px]',
      lg: 'px-6 py-3 text-lg min-h-[48px]'
    };
    
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={${baseStyles}   }
        {...props}
      >
        {loading && <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
