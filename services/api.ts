import axios from 'axios';
import { LOCAL_URL } from '@env';

export const api = axios.create({
  baseURL: LOCAL_URL,
});
