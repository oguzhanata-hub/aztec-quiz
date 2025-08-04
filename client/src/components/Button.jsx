import React from 'react';

export default function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'btn';
  const variantClass = variant === 'outline' ? ' btn-outline' : '';
  return (
    <button className={`${base}${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
