import axios from 'axios';

const API_URL = 'http://localhost:5003/api/newsletter';

export const subscribe = async (name: string, email: string) => {
  const response = await axios.post(`${API_URL}/subscribe`, { name, email });
  return response.data;
};