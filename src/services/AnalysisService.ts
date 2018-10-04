import axios from 'axios';

export function getAnalysis(handle: string): Promise<any> {
  return axios
    .get(`http://localhost:3000/analysis/${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
