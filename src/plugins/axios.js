import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'https://www.etapps.com.br:3001/api',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
  },
});



