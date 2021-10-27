import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.2.127:5000/',
});

export default api;