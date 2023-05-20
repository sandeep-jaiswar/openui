import React from 'react';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, checked, onChange }) => {
  const handleSwitchChange = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center">
      <label htmlFor={label} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id={label}
            checked={checked}
            onChange={handleSwitchChange}
            className="hidden"
          />
          <div className="toggle-path bg-gray-300 w-9 h-5 rounded-full shadow-inner"></div>
          <div
            className={`toggle-circle absolute bg-white w-3.5 h-3.5 rounded-full shadow-md transition-transform ${
              checked ? 'translate-x-4.5' : 'translate-x-0'
            }`}
          ></div>
        </div>
        <div className="ml-2 text-gray-700">{label}</div>
      </label>
    </div>
  );
};

export default Switch;
