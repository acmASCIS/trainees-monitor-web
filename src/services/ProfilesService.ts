import axios from 'axios';

export function getProfile(handle: string): Promise<any> {
  return axios
    .get(`http://localhost:3000/profile/${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
