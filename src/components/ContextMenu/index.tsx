import React, { useState } from 'react';

interface ContextMenuProps {
  triggerElementId: string;
  items: string[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ triggerElementId, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const { pageX, pageY } = event;
    setPosition({ top: pageY, left: pageX });
    setIsOpen(true);
  };

  const handleItemClick = (item: string) => {
    // Handle item click logic
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

  return (
    <div id={triggerElementId} onContextMenu={handleContextMenu}>
      {isOpen && (
        <div
          className="fixed z-10 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
          style={{ top: position.top, left: position.left }}
        >
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
