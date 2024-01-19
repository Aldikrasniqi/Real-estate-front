import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_AGENT_URL } from '../constants/api';
const token = localStorage.getItem('user');
export default function useAgents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    if (token) {
      const accessToken = JSON.parse(token).access_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    axios
      .get(`${API_AGENT_URL}agents`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAgents(res.data);
      });
  }, [setAgents]);

  return agents;
}
export function useAgent(agentId: number) {
  const [agent, setAgent] = useState<any>(null);
  useEffect(() => {
    if (token) {
      const accessToken = JSON.parse(token).access_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    axios
      .get(`${API_AGENT_URL}agents/${agentId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAgent(res.data);
      });
  }, [agentId]);
  return agent;
}
