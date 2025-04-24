import axios from 'axios';

const API_URL = 'http://localhost:5003/api/hotel-enquiry';

export const sendHotelEnquiry = async (formData: {
  hotelName: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}) => {
  const currentUrl = window.location.href;
  const response = await axios.post(`${API_URL}/send`, {
    ...formData,
    currentUrl
  });
  return response.data;
}; 