import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero-imm.herokuapp.com/'
});

export default api;
