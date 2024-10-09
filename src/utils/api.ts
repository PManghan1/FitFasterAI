import axios from 'axios';

const API_URL = 'http://localhost:8080'; // This should be updated to your server's URL when deployed

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getAuthorizedResource = async () => {
  try {
    const response = await api.get('/authorized');
    return response.data;
  } catch (error) {
    console.error('Error fetching authorized resource:', error);
    throw error;
  }
};

export default api;