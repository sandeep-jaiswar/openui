import React, { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

const CustomColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onChange }) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const handleColorChange = (color: ColorResult) => {
    onChange(color.hex);
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer"
        style={{ backgroundColor: selectedColor }}
        onClick={() => setIsColorPickerOpen(true)}
      />
      {isColorPickerOpen && (
        <div className="absolute z-10">
          <ChromePicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default CustomColorPicker;
