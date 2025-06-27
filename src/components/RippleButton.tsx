
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const RippleButton = ({ children, className, variant = 'primary', ...props }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
  };

  const baseClasses = "relative overflow-hidden transition-all duration-300 transform hover:scale-105";
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
  };

  return (
    <button
      ref={buttonRef}
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
};

export default RippleButton;
