import React, { useState, useRef } from 'react';

interface RippleWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const RippleWrapper: React.FC<RippleWrapperProps> = ({ children, className = '' }) => {
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const rippleIdRef = useRef(0);

    const createRipple = (event: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newRipple = {
            id: rippleIdRef.current++,
            x,
            y,
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={createRipple}
        >
            {children}

            {/* Ripple effects */}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x - 25,
                        top: ripple.y - 25,
                        width: 50,
                        height: 50,
                    }}
                >
                    <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
                    <span className="absolute inset-2 rounded-full bg-blue-400/20 animate-ping animation-delay-75" />
                    <span className="absolute inset-4 rounded-full bg-blue-400/10 animate-ping animation-delay-150" />
                </span>
            ))}
        </div>
    );
};

export default RippleWrapper;
