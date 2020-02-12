import React from 'react';
import classes from './Backdrop.css'

const Backdrop = ({onToggle}) => {

    return (
        <div
            className={classes.Backdrop}
            onClick={onToggle}
        >

        </div>
    )
};

export default Backdrop;