import axios from 'axios';

const API_URL = 'http://localhost:5003/api/contact';

export const sendContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await axios.post(`${API_URL}/send`, formData);
  return response.data;
}; 