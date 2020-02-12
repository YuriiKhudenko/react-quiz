import React from 'react';
import classes from './FinishedQuiz.css';
import Button from '../../UI/Button/Button';
import {withRouter} from 'react-router-dom';


const FinishedQuiz = ({ results, quiz, restartClick, ...props }) => {

    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === 'success') {
            total++
        }
        return total
    }, 0);
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    quiz.map((list) => {
                        const cls = [
                            'fa',
                            results[list.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[results[list.id]]
                        ];
                        return(
                            <li key={list.id}>
                                <b>{list.id}</b>&nbsp;
                                {list.question}
                                <i className={cls.join(' ')} />
                            </li>
                        )
                    })
                }
            </ul>
            <p>Правильно {successCount} из {quiz.length}</p>

            <Button onClick={restartClick} type="primary">Повторить</Button>
            <Button onClick={() => props.history.push('/')} type="success">Перейти в список тестов</Button>
        </div>
    )
};

export default withRouter(FinishedQuiz);