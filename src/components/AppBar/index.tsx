import React from 'react';

interface AppBarProps {
  title: string;
  children?: React.ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({ title, children }) => {
  return (
    <div className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      {children && <div>{children}</div>}
    </div>
  );
};

export default AppBar;
