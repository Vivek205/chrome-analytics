import React from 'react';

interface ChromeLyticsLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ChromeLyticsLogo: React.FC<ChromeLyticsLogoProps> = ({ 
  className = "", 
  width = 180, 
  height = 36 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 220 60" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Orange shape */}
      <ellipse cx="15" cy="30" rx="18" ry="12" fill="#FF6B35" transform="rotate(15 15 30)" />
      
      {/* Red shape */}
      <circle cx="22" cy="25" r="14" fill="#E63946" />
      
      {/* Light blue shape */}
      <ellipse cx="28" cy="32" rx="16" ry="10" fill="#4ECDC4" transform="rotate(-10 28 32)" />
      
      {/* Text */}
      <text x="50" y="38" fontFamily="Arial" fontWeight="bold" fontSize="24" fill="black">
        CHROMELYTICS
      </text>
    </svg>
  );
}; 