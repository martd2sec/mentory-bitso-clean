import React from 'react';
import bitsoLogo from '/bitso-logo.png';

interface BitsoLogoProps {
  size?: number;
  className?: string;
}

const BitsoLogo: React.FC<BitsoLogoProps> = ({ size = 32, className = "" }) => {
  return (
    <img
      src={bitsoLogo}
      alt="Bitso Logo"
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: 'contain',
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
};

export default BitsoLogo; 