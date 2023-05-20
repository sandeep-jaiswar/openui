import React from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TextField;
