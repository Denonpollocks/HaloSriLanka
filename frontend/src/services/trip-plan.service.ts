import axios from 'axios';

const API_URL = 'http://localhost:5003/api/trip-plan';

export const sendTripPlanEnquiry = async (formData: {
  name: string;
  email: string;
  phone: string;
  travellers: string;
  message: string;
  destination: string;
  price: number;
  currency: string;
}) => {
  const currentUrl = window.location.href;
  const response = await axios.post(`${API_URL}/send`, {
    ...formData,
    currentUrl
  });
  return response.data;
}; 