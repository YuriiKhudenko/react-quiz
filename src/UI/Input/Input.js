import React from 'react';
import classes from './Input.css';

const Input = (props) => {

    const isInvalid = ({valid, touched, shouldValidate}) => {
        return  !valid && touched && shouldValidate
    };

    const inputType = props.type || 'text';
    const cls = [
        classes.Input
    ];
    const htmlFor = `${inputType}-${Math.random()*100}`;

    if(isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.children}
            </input>
            {
                isInvalid(props)
                ?
                <span>{props.errorMessage}</span>
                :
                null
            }

        </div>
    )
};

export default Input;