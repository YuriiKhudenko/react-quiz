import React from 'react';
import classes from './AnswerItem.css';

const AnswerItem = ({answer, onAnswerClickHandler, answerState}) => {
const cls = [classes.AnswerItem];
    if (answerState) {
        cls.push(classes[answerState]);
    }
    return (
        <li className={cls.join(' ')} onClick={() => onAnswerClickHandler(answer.id)}>
            {answer.text}
        </li>
    )
};


export default AnswerItem;