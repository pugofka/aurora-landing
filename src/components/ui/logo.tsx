'use client';

import React from 'react';

export function Logo({ isLight }: { isLight: boolean }) {
    // #FF3D00 is the brand orange, #D1D1D1 is the default light gray
    const textColor = isLight ? "#FF3D00" : "#D1D1D1";
    
    return (
        <svg 
            width="1400" 
            height="248" 
            viewBox="0 0 1400 248" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-auto h-full transition-colors duration-500"
        >
            {/* Графическая часть */}
            <path d="M273 182L327 234H219L273 182Z" fill="#E94C26"/>
            <path d="M164 77V0L327 157V234L164 77Z" fill="#DADADA"/>
            <path d="M0 157.5V234.5L164 77V0L0 157.5Z" fill="#E94C26"/>
            <rect x="140" y="144" width="20" height="20" fill="#DADADA"/>
            <rect x="168" y="144" width="20" height="20" fill="#E94C26"/>
            <rect x="140" y="172" width="20" height="20" fill="#E94C26"/>
            <rect x="168" y="172" width="20" height="20" fill="#575656"/>
            
            {/* Текстовая часть (ЗМК АВРОРА) */}
            <text 
                x="350" 
                y="175" 
                fill={textColor} 
                fontFamily="Oswald, Arial, sans-serif" 
                fontWeight="700" 
                fontSize="115" 
                style={{ textTransform: 'uppercase', letterSpacing: '0.02em' }}
                className="transition-colors duration-500"
            >
                ЗМК АВРОРА
            </text>
        </svg>
    );
}

