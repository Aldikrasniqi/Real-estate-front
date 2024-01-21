import axios from 'axios';
import { API_AGENT_URL } from '../constants/api';
import { useEffect, useState } from 'react';

export default function useProperties() {
  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem('user');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const user = JSON.parse(token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.access_token;
        }

        const response = await axios.get(`${API_AGENT_URL}properties`);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchData();
  }, [token]);

  return properties;
}
