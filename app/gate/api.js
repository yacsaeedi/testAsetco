import axios from 'axios';

const client = axios.create({
  baseURL: 'https://reqres.in/api/',
  json: true,
});

export default client;
