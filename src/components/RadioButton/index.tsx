import React from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
  const handleRadioButtonChange = () => {
    onChange(value);
  };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleRadioButtonChange}
        className="mr-2"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
};

export default RadioButton;
