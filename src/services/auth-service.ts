import axios from 'axios';
import { API_URL } from '../constants/api';

export const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
};

export const  login = (username: string, password: string) => {
  console.log(username, password);
  const user = {
    username,
    password,
    token: 'asdasdeqwwqeq31asd123',
    islogged: true,
    roles: ['ROLE_ADMIN'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgca89Cjk-4kMRAvPKPMYI9AZ-xs_52BWz2g&usqp=CAU'
  };
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));
  window.location.reload();
  window.location.href = '/profile';
  return user;
  // return axios
  //   .post(API_URL + 'signin', {
  //     username,
  //     password,
  //   })
  //   .then((response) => {
  //     if (response.data.accessToken) {
  //       localStorage.setItem('user', JSON.stringify(response.data));
  //     }
  //     return response.data;
  //   });
  
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
};
