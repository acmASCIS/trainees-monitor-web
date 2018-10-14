import axios from 'axios';

export function getCFContests(): Promise<any> {
  return axios
    .get(`/cfcontests`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function createCFContest(contestId: number): Promise<any> {
  return axios
    .post(`/cfcontests`, { contestId })
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function deleteCFContest(contestId: number): Promise<any> {
  return axios
    .delete(`/cfcontests`, { data: { contestId } })
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
