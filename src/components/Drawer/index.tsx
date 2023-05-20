import React from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 bg-white shadow w-64 transform transition-transform ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-blue-500 text-white">
        <h2 className="text-lg font-semibold">Drawer</h2>
        <button
          onClick={handleClose}
          className="text-white focus:outline-none hover:text-gray-300"
        >
          Close
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
