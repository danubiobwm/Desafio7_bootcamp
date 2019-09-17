import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/danubiobwm/Desafio7_bootcamp/',
});

export default api;
