import React, { useState } from 'react';

interface BottomSheetProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ triggerElement, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openBottomSheet}>{triggerElement}</div>
      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-center z-50">
          <div className="bg-black opacity-60 fixed inset-0" onClick={closeBottomSheet}></div>
          <div className="bg-white rounded-t-lg shadow-lg w-full max-w-md overflow-hidden">
            <div className="p-4">{children}</div>
            <div className="flex justify-end bg-gray-100 p-4">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeBottomSheet}
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomSheet;
