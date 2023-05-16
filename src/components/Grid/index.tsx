import React from 'react';

interface GridProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ onClick, children, className }) => {
    return (
        <div className={`flex flex-wrap ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Grid;