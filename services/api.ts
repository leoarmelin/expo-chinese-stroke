import axios from 'axios';
import { LOCAL_URL } from 'react-native-dotenv';

export const api = axios.create({
  baseURL: LOCAL_URL,
});
