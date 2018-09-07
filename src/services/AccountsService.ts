import axios from 'axios';
import { Role } from '../lib/User';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
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
    .then(response => response)
    .catch(error => Promise.reject(error));
}

export function register(payload: IRegisterRequest): Promise<any> {
  return axios
    .post('http://localhost:3000/register', payload)
    .then(response => response)
    .catch(error => Promise.reject(error));
}
