import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:1505'
});

export default api;