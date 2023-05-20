import React from 'react';

interface Chip {
  id: string;
  label: string;
}

interface ChipsProps {
  chips: Chip[];
  onDelete: (id: string) => void;
}

const Chips: React.FC<ChipsProps> = ({ chips, onDelete }) => {
  const handleDelete = (id: string) => {
    onDelete(id);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <div
          key={chip.id}
          className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-full"
        >
          <span className="mr-1">{chip.label}</span>
          <button
            onClick={() => handleDelete(chip.id)}
            className="flex items-center justify-center w-4 h-4 text-white rounded-full hover:bg-white hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0a6 6 0 1 0 6 6A6 6 0 0 0 6 0zm2.122 7.121l-1.06 1.061L6 7.06 4.939 8.122 3.878 7.06 4.94 5.999 3.878 4.939l1.061-1.06L6 4.94l1.06-1.061 1.061 1.06L7.06 5.999l1.061 1.061z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Chips;
