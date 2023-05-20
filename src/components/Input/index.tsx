import React, { useState } from 'react';

interface InputProps {
    label: string;
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    isMovingLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    isMovingLabel = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="relative">
            {isMovingLabel && (
                <label
                    className={`absolute left-2 transition-all duration-200 ${isFocused || value ? 'text-sm top-1' : 'text-base top-3'
                        } ${isFocused ? 'text-blue-500' : 'text-gray-500'
                        } pointer-events-none select-none`}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={isMovingLabel ? '' : placeholder}
                className={`w-full py-2 px-4 rounded border ${isFocused ? 'border-blue-500' : 'border-gray-300'
                    } focus:border-blue-500 outline-none ${isMovingLabel ? 'pt-6' : ''
                    }`}
            />
        </div>
    );
};

export default Input;
