import React, { useState } from 'react';

interface SimpleModalProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ triggerElement, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>{triggerElement}</div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">{children}</div>
            <div className="px-4 py-2 bg-gray-200 flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
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

export default SimpleModal;
