import React from 'react';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = 'bottom', children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div
        className={`${
          position === 'top'
            ? 'bottom-full left-1/2 translate-x-[-50%] translate-y-[calc(-0.5rem-1px)]'
            : position === 'bottom'
            ? 'top-full left-1/2 translate-x-[-50%] translate-y-[calc(0.5rem+1px)]'
            : position === 'left'
            ? 'top-1/2 left-full -translate-y-1/2 translate-x-[calc(-0.5rem-1px)]'
            : 'top-1/2 right-full -translate-y-1/2 translate-x-[calc(0.5rem+1px)]'
        } absolute z-10 hidden px-2 py-1 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap pointer-events-none opacity-0 transition-opacity duration-200`}
      >
        {text}
        <svg
          className={`${
            position === 'top' || position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2' : 'top-1/2 left-full -translate-y-1/2'
          } absolute z-10 text-gray-800`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3zm0 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 17z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <style>{`
        .relative:hover .absolute {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Tooltip;
