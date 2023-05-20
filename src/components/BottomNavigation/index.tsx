import React from 'react';

interface BottomNavigationProps {
  items: NavigationItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  const handleItemClick = (id: string) => {
    onItemClick(id);
  };

  return (
    <nav className="bg-blue-500 text-white fixed bottom-0 left-0 right-0 flex justify-around">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`p-2 flex flex-col items-center justify-center focus:outline-none ${
            activeItem === item.id ? 'text-white' : 'text-gray-300'
          }`}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
