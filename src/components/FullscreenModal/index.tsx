import React, { useState } from 'react';

interface FullscreenModalProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({ triggerElement, children }) => {
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
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-full h-full max-w-4xl max-h-4xl p-4 overflow-y-auto">
              {children}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
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

export default FullscreenModal;
