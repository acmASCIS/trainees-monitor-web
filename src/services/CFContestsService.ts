import axios from 'axios';

export function getCFContests(): Promise<any> {
  return axios
    .get(`http://localhost:3000/cfcontests`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function createCFContest(contestId: number): Promise<any> {
  return axios
    .post(`http://localhost:3000/cfcontests`, { contestId })
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function deleteCFContest(contestId: number): Promise<any> {
  return axios
    .delete(`http://localhost:3000/cfcontests`, { data: { contestId } })
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
