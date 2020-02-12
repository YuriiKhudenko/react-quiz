import React from 'react';
import classes from './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({
    answers,
    question,
    onAnswerClickHandler,
    quizlength,
    isFinished,
    currentAnswer,
    answerState
                }) => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <b>{currentAnswer}.</b>&nbsp;
                {question}
            </span>
            <small>{currentAnswer} from {quizlength}</small>
        </p>
        <AnswersList
            answers={answers}
            onAnswerClickHandler={onAnswerClickHandler}
            answerState={answerState}
        />
    </div>

    );

export default ActiveQuiz