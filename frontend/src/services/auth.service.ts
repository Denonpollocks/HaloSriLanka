import axios from 'axios';

const API_URL = 'http://localhost:5003/api/auth';

// Add these functions
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const signin = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signin`, {
    email,
    password
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const signup = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signup`, {
    name,
    email,
    password
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const signout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};