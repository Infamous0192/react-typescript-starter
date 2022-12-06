import Axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api';

export const axios = Axios.create({
  baseURL,
});
