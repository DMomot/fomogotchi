import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fomogotchi.duckdns.org/api/', // 
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-API-Key': process.env.VUE_APP_API_URL
  }
});

export const getFomoVibe = async (walletAddress) => {
  try {
      const response = await apiClient.get(walletAddress);
      return response.data;
  } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
  }
}