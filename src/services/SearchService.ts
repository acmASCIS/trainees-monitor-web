import axios from 'axios';

export function searchUsers(query: string): Promise<any[]> {
  return axios
    .get(`http://localhost:3000/users/search?query=${query}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
