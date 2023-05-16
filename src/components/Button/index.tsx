import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button className={`flex items-center py-2 px-5 rounded-2xl ${className}`} onClick={onClick}>
            <span className="flex items-center px-1 gap-2.5 w-full">
                {children}
            </span>
        </button>
    );
};

export default Button;