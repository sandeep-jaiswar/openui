import React from 'react';

interface ColumnProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: number;
}

const Column: React.FC<ColumnProps> = ({ children, onClick, className, size = 12 }) => {
    return (
        <div className={`col-${size} ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Column;