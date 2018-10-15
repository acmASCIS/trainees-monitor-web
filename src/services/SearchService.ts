import axios from 'axios';

export function searchUsers(query: string): Promise<any[]> {
  return axios
    .get(`/users/search?query=${query}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
