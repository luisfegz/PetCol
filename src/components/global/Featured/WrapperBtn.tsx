import React, { ReactNode } from 'react';

interface WrapperBtnProps {
  children: ReactNode;
}

const WrapperBtn: React.FC<WrapperBtnProps> = ({ children }) => {
  return (
    <div 
        className="
            grid-cols-2 
            gap-[0px] 
            grid">
      {children}
    </div>
  );
};

export default WrapperBtn;