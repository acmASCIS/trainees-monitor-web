import axios from 'axios';
import Cookies from 'universal-cookie';

interface ILoginRequest {
  email: string;
  password: string;
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
