import Agent from '@/types/agent.type';
import { API_AGENT_URL } from '../constants/api';
import axios from 'axios';

// create a new agent
export const createAgent = async (agent: Agent) => {
  try {
    const token = localStorage.getItem('user');
    if (token) {
      const user = JSON.parse(token);
      console.log(user.access_token);
      console.log(agent);
      const response = await axios.post(`${API_AGENT_URL}agents`, agent, {
        headers: {
          Authorization: 'Bearer ' + user.access_token,
          'Content-Type': 'application/json',
        },
      });

      // Check if the response status is in the 2xx range (successful)
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        // Handle the error more effectively (throw an error or handle it in a specific way)
        throw new Error(`Failed to create agent. Status: ${response.status}`);
      }
    }
  } catch (error) {
    console.error('Error creating agent:', error);
    // You might want to throw the error here or handle it differently based on your application's requirements
  }
};
