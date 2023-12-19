import axios from 'axios';

export const request = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://tarefasapi.etapps.com.br/api',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
  },
});



