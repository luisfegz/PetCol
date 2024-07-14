import React, { ReactNode } from 'react';

interface CenterProps {
  children: ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Center;