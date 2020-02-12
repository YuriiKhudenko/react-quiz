import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../UI/Loader/Loader';

class Quiz extends Component {

    state =  {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [],
        loading: true
    };
    onAnswerClickHandler = (answerId) => {

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {

            if(!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        answerState: null,
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout)
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }
    };

    isQuizFinished() {
      return this.state.activeQuestion + 1 === this.state.quiz.length;
    };
    onRestartButtonHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            results: {}
        })
    };
    goToQuizListHandler = () => {
        console.log('go back')
    };

    async componentDidMount() {
        console.log('Quiz id = ', );
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;

            console.log('response = ', response.data);

            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render(){
    return(
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>
                <h1>Quiz</h1>

                {
                    this.state.loading
                    ? <Loader />
                    : this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            restartClick={this.onRestartButtonHandler}
                            goToQuizList = {this.goToQuizListHandler}
                        />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClickHandler={this.onAnswerClickHandler}
                            quizlength={this.state.quiz.length}
                            currentAnswer={this.state.activeQuestion + 1}
                            answerState={this.state.answerState}
                        />
                }
            </div>
        </div>
    )
    }
}

export default Quiz