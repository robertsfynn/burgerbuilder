import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-fr-burger-builder.firebaseio.com/'
});

export default instance;