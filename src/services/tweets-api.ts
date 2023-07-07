import axios from 'axios';

const API_URL = 'https://64382a1ff3a0c40814ac6a9b.mockapi.io/api/users';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
