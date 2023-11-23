import { API_URL } from '../constants/api';
import axios from 'axios';

export const createProperty = (
  property: string,
  badrooms: string,
  bathrooms: string,
  description: string,
  surface: string,
  price: string,
  langtitude: string,
  longtitude: string
) => {
    console.log(property);
    return axios.post(API_URL + 'property', {}).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
};
