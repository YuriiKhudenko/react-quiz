import React from 'react';
import classes from './button.css'

const Button = ({onClick, children, type, disabled}) => {
    const cls = [
        classes.Button,
        classes[type]
    ];
    return (
        <button
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;