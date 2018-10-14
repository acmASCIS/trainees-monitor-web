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
    .post('/login', payload)
    .then(response => response)
    .catch(error => Promise.reject(error));
}

export function register(payload: IRegisterRequest): Promise<any> {
  return axios
    .post('/register', payload)
    .then(response => response)
    .catch(error => Promise.reject(error));
}

export function getUnconfirmedUsers(): Promise<any> {
  return axios
    .get('/unconfirmed')
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function confirmUser(handle: string): Promise<any> {
  return axios
    .post(`/confirm?handle=${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
