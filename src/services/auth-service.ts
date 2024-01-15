import axios from 'axios';
import { API_URL } from '../constants/api';

export const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + 'signup', {
    email,
    password,
    role: 'ADMIN',
    username,
  });
};

export const login = (email: string, password: string) => {
  // const user = {
  //   email,
  //   password,
  //   token: 'asdasdeqwwqeq31asd123',
  //   islogged: true,
  //   roles: ['ROLE_ADMIN'],
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgca89Cjk-4kMRAvPKPMYI9AZ-xs_52BWz2g&usqp=CAU'
  // };

  return axios
    .post(API_URL + 'authenticate', {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
};
