import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU.IP:3333',
});

export default api;
