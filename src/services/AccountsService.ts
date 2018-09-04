import axios from 'axios';
import Cookies from 'universal-cookie';
import { Role } from '../lib/User';

interface ILoginRequest {
  email: string;
  password: string;
}

interface IRegisterRequest {
  handle: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
  codeforcesHandle: string;
}

export function login(payload: ILoginRequest): Promise<any> {
  return axios
    .post('http://localhost:3000/login', payload)
    .then(response => {
      // set cookie
      const cookies = new Cookies();
      cookies.set('Authorization', response.headers.authorization);
      return null;
    })
    .catch(error => {
      return error.response.data;
    });
}

export function register(payload: IRegisterRequest): Promise<any> {
  return axios
    .post('http://localhost:3000/register', payload)
    .then(response => null)
    .catch(error => error.response.data);
}
