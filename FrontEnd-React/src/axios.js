import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktock-api.herokuapp.com/'
})

export default instance;