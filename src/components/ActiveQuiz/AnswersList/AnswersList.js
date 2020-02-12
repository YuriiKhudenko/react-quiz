import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem'


const AnswersList = ({answers, onAnswerClickHandler, answerState}) => {

    return (
        <ul className={classes.AnswersList}>
        {answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClickHandler={onAnswerClickHandler}
                    answerState={answerState ? answerState[answer.id] : null}
                />
            )
        })}
    </ul>
    )}
export default AnswersList;