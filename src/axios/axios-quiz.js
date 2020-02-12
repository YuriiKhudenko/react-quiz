import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-738c7.firebaseio.com/'
})