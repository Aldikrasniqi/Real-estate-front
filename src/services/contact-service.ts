import { API_URL } from '../constants/api';
import axios from 'axios';
export const contactUs = (
  firstName: string,
  email: string,
  phone: string,
  interest: string,
  message: string
) => {
  return axios.post(API_URL + 'contact-us', {
    firstName,
    email,
    phone,
    interest,
    message,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  });
};
