import React, { useState, useEffect } from 'react';

interface SnackbarProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, duration = 3000, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-gray-800 text-white rounded-md p-4 shadow-md">
            <p>{message}</p>
            <button
              className="text-white font-semibold ml-4 focus:outline-none"
              onClick={handleClose}
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
