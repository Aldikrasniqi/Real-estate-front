import { API_URL } from '../constants/api';
import axios from 'axios';

export const createProperty = (
  property: string,
  badrooms: number,
  bathrooms: number,
  description: string,
  surface: number,
  price: number,
  langtitude: number,
  longtitude: number
) => {
  return axios
    .post(API_URL + 'property', {
      property,
      badrooms,
      bathrooms,
      description,
      surface,
      price,
      langtitude,
      longtitude,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
