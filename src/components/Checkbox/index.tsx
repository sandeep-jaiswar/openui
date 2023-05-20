import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;
